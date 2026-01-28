import { useEffect, useId, useMemo, useRef, useState } from "react";
import mermaid from "mermaid";

type MermaidTheme =
    | "default"
    | "dark"
    | "forest"
    | "neutral"
    | "base"
    | "neo"
    | "neo-dark";

type Props = {
    /** Mermaid theme name. Default: "neo-dark" */
    theme?: MermaidTheme;
    /** Optional extra container classes */
    className?: string;
};

/**
 * Responsive Mermaid flowchart renderer (SVG) using mermaid.render()
 * - Tailwind responsive wrapper
 * - Theme via props (default neo-dark)
 * - Scroll on overflow instead of making it unreadable
 */
export default function MedicalFlowchartMermaid({
                                                    theme = "dark",
                                                    className = "",
                                                }: Props) {
    const id = useId().replace(/:/g, "_");
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    const code = useMemo(
        () => `---
config:
  theme: ${theme}
  look: neo
---
graph TD
    Start[/Старт/] --> MainMenu[Головне меню]
    MainMenu --> CallAmbulance[Викликати невідкладну допомогу]
    MainMenu --> MakeAppointment[Записатися на прийом до лікаря]
    MainMenu --> Surgery[Оперативне втручання]
    MainMenu --> Dashboard[Особистий кабінет]
    
    %% Виклик невідкладної допомоги
    CallAmbulance --> ForChild[Для дитини]
    CallAmbulance --> ForAdult[Для дорослого]
    ForChild --> DescriptionChild[Опис ситуації для дитини]
    ForAdult --> DescriptionAdult[Опис ситуації для дорослого]
    DescriptionChild --> AddressMenu[Меню адреси]
    DescriptionAdult --> AddressMenu
    AddressMenu --> Geolocation[Надати мою геолокацію]
    AddressMenu --> EnterAddress[Ввести адресу самостійно]
    EnterAddress --> AddCity[Додати місто]
    AddCity --> AddStreet[Додати вулицю]
    AddStreet --> AddHouse[Додати будинок]
    AddHouse --> AddEntrance[Додати під'їзд]
    AddEntrance --> AddRoom[Додати квартиру]
    AddRoom --> AddCod[Додати код домофона]
    AddCod --> AddPhone[Додати телефон]
    Geolocation --> AddPhone
    AddPhone --> ShortList[Короткий список симптомів]
    ShortList --> AdditionalNumber[Додати додатковий номер]
    AdditionalNumber --> SparePhone[Запасний телефон]
    SparePhone --> Verify[Підтвердити]
    Verify --> Edit[Редагувати]
    Edit --> EditDescription[Редагувати опис]
    Edit --> EditCity[Редагувати місто]
    Edit --> EditShortList[Редагувати короткий список]
    Edit --> EditPhoneNumber[Редагувати номер телефону]
    Edit --> EditStreet[Редагувати вулицю]
    Edit --> EditHouse[Редагувати будинок]
    Edit --> EditEntrance[Редагувати під'їзд]
    Edit --> EditApartment[Редагувати квартиру]
    Edit --> EditCod[Редагувати код домофона]
    
    %% Запис на прийом
    MakeAppointment --> AppointmentComments[Коментарі до запису]
    AppointmentComments --> AppointmentAddress[Вибір адреси]
    AppointmentAddress --> AppointmentSpecialist[Вибір спеціаліста]
    AppointmentSpecialist --> HelpChoose[Допомога з вибором]
    HelpChoose --> OperatorWay[Через оператора]
    HelpChoose --> EleksWay[Електронний запис]
    EleksWay --> AppointmentTimeSetMonth[Вибір місяця]
    AppointmentTimeSetMonth --> AppointmentTimeSetTime[Вибір часу]
    AppointmentTimeSetTime --> AppointmentTime[Підтвердження часу]
    AppointmentTime --> AppointmentEleksOutcome[Результат електронного запису]
    OperatorWay --> EditAppointment[Редагування запису]
    EditAppointment --> EditAppointmentPhone[Редагування телефону]
    EditAppointmentPhone --> EditAppointmentUserName[Редагування імені користувача]
    EditAppointmentUserName --> AppointmentUserName[Ім'я користувача]
    AppointmentUserName --> PreviousContact[Попередній контакт]
    PreviousContact --> AcceptAppointment[Підтвердження запису]
    
    %% Оперативне втручання
    Surgery --> InterventionSpecialist[Вибір спеціаліста для втручання]
    InterventionSpecialist --> InterventionComments[Коментарі до втручання]
    InterventionComments --> EditIntervention[Редагування втручання]
    EditIntervention --> EditInterventionPhone[Редагування телефону]
    EditInterventionPhone --> InterventionUserName[Ім'я користувача]
    InterventionUserName --> InterventionPreviousContact[Попередній контакт]
    InterventionPreviousContact --> AcceptIntervention[Підтвердження втручання]
    
    %% Особистий кабінет
    Dashboard --> DashboardSchedules[Мої записи]
    Dashboard --> DashboardSchedulesPrevious[Ваші минулі записи]
    Dashboard --> DashboardDebt[Заборгованості]
    Dashboard --> DashboardLastDebt[Оплатити останній борг]
    Dashboard --> DashboardDocuments[Мої документи]
    Dashboard --> DashboardScheduleCancel[Відмінити запис]
    Dashboard --> DashboardInitializeChat[Задати питання]
    
    DashboardSchedules --> DashboardDataSlot[Дані про запис]
    DashboardSchedulesPrevious --> DashboardDataSlot
    
    DashboardDebt --> DashboardDebtChoicePatient[Вибір пацієнта для боргу]
    DashboardLastDebt --> DashboardLastDebtChoicePatient[Вибір пацієнта для останнього боргу]
    
    DashboardDocuments --> DashboardDocumentsPatient[Документи пацієнта]
    
    DashboardScheduleCancel --> DashboardSchedulesCancelConfirm[Підтвердження відміни запису]
    
    DashboardInitializeChat --> DashboardComments[Коментарі для чату]
    DashboardComments --> OperatorInChat[Оператор в чаті]
    DashboardComments --> UserInChat[Користувач в чаті]
`,
        [theme]
    );

    useEffect(() => {
        let cancelled = false;

        async function run() {
            setError(null);

            // Make Mermaid deterministic-ish and prevent auto-run.
            mermaid.initialize({
                startOnLoad: false,
                securityLevel: "strict",
                // theme is also embedded in the frontmatter above,
                // but we set it here too for safety/consistency.
                theme: theme as any,
            });

            const el = containerRef.current;
            if (!el) return;

            try {
                const { svg } = await mermaid.render(`m_${id}`, code);

                if (cancelled) return;
                el.innerHTML = svg;

                const svgEl = el.querySelector("svg");
                if (svgEl) {
                    // Responsive SVG: fill container width, keep aspect ratio.
                    svgEl.setAttribute("width", "100%");
                    svgEl.style.height = "auto";
                    svgEl.removeAttribute("height");

                    // Ensure it can shrink in flex/grid containers.
                    svgEl.style.maxWidth = "100%";
                    svgEl.style.display = "block";
                }
            } catch (e: any) {
                if (cancelled) return;
                el.innerHTML = "";
                setError(e?.message ?? "Failed to render Mermaid diagram");
            }
        }

        run();
        return () => {
            cancelled = true;
        };
    }, [code, id, theme]);

    return (
        <div
            className={[
                // Card-like wrapper
                "w-full rounded-2xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm ",
                "dark:border-zinc-800 dark:bg-zinc-950/40",
                className,
            ].join(" ")}
        >
            <div className="flex items-center justify-between gap-3 pb-2">
                {/*<ArrowsPointingOutIcon className={"h-5 w-5 text-zinc-500 dark:text-zinc-400"} />*/}
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">

                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">

                    </div>
                </div>
            </div>

            {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200">
                    {error}
                </div>
            ) : (
                <div
                    className={[
                        // Make it responsive:
                        // - allow horizontal scroll if diagram is wide
                        // - keep SVG at full width of container
                        "w-full overflow-x-auto overflow-y-hidden",
                        "rounded-xl border border-zinc-200/70 bg-white p-2",
                        "dark:border-zinc-800 dark:bg-zinc-950",
                    ].join(" ")}
                >
                    <div
                        ref={containerRef}
                        className={[
                            // Mermaid puts inline styles; we ensure SVG behaves
                            // and doesn't overflow weirdly.
                            "[&>svg]:w-full [&>svg]:h-auto",
                            "[&>svg]:min-w-[720px] sm:[&>svg]:min-w-0",
                        ].join(" ")}
                    />
                </div>
            )}

        </div>
    );
}
