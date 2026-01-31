import * as React from "react";

type Variant = "slate" | "violet";

type ButtonMainProps = {
    children: React.ReactNode;
    variant?: Variant;
    disableSpin?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, { wrapper: string; content: string; text: string }> = {
    slate: {
        wrapper: "bg-gradient-to-b from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800",
        content: [
            "bg-gradient-to-b from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900",
            "group-hover:from-slate-600 group-hover:to-slate-700 dark:group-hover:from-slate-700 dark:group-hover:to-slate-800",
            "group-active:from-slate-600 group-active:to-slate-600 dark:group-active:from-slate-700 dark:group-active:to-slate-700",
        ].join(" "),
        text: "text-white",
    },
    violet: {
        wrapper: "bg-gradient-to-b from-violet-600 to-violet-800 dark:from-violet-700 dark:to-violet-900",
        content: [
            "bg-gradient-to-b from-violet-800 to-slate-800 dark:from-violet-900 dark:to-slate-900",
            "group-hover:from-violet-700 group-hover:to-slate-800 dark:group-hover:from-violet-800 dark:group-hover:to-slate-900",
            "group-active:from-violet-600 group-active:to-violet-800 dark:group-active:from-violet-700 dark:group-active:to-violet-900",
        ].join(" "),
        text: "",
    },
};

export default function ButtonMain({
                                       children,
                                       variant = "slate",
                                       disableSpin = false,
                                       className = "",
                                       ...props
                                   }: ButtonMainProps) {
    const v = variants[variant];

    return (
        <button
            {...props}
            className={[
                "card-wrapper group inline-flex w-fit min-h-10 select-none",
                v.wrapper,
                v.text,
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                className,
            ].join(" ")}
        >
            {/* card-content — перекрывает конус */}
            <span
                aria-hidden="true"
                className={[
                    "card-content transition-all duration-300 ease-out ",
                    v.content,
                    disableSpin && "scale-[1.05]",
                    "group-active:scale-[1.05]",
                    "group-hover:duration-100 group-active:duration-50",
                ].join(" ")}
            />

            {/* текст */}
            <span className={`relative inline-flex items-center justify-center px-5 py-1 text-sm font-semibold whitespace-nowrap`}>
        {children}
      </span>
        </button>
    );
}
