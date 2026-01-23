import * as React from "react";
import logo from "public/img/logoPako.png";
import {
    Html,
    Body,
    Container,
    Section,
    Text,
    Img,
    Heading,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { render } from "@react-email/render";

export type ContactSuccessEmailProps = {
    brandName: string;
    heading: string;
    message: string;
    signature: string;
    footer: string;
};

export function ContactSuccessEmail({
    brandName,
    heading,
    message,
    signature,
    footer,
}: ContactSuccessEmailProps) {
    return (
        <Html>
            <Tailwind>
                <Body className="bg-gray-100 m-0 p-0">
                    <Section className="py-8 px-4">
                        <Container className="max-w-[640px] bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <Section className="px-6 py-5 bg-indigo-950 ">
                                <Img
                                    src="https://pako.work/img/logoPako.png"
                                    alt="PaKo"
                                    className="h-9"
                                />
                            </Section>

                            <Section className="px-7 py-6 font-sans text-slate-900">
                                <Text className="text-[11px] uppercase tracking-widest text-slate-400 m-0">
                                    {brandName}
                                </Text>

                                <Heading className="text-2xl font-bold mt-3 mb-3">
                                    {heading}
                                </Heading>

                                <Text className="text-base leading-relaxed text-slate-600 m-0">
                                    {message}
                                </Text>

                                <Text className="mt-5 text-sm text-slate-500">
                                    {signature}
                                </Text>
                            </Section>

                            <Section className="px-7 pb-5">
                                <div className="h-px bg-gray-200" />
                                <Text className="text-xs text-slate-400 mt-3">
                                    {footer}
                                </Text>
                            </Section>
                        </Container>
                    </Section>
                </Body>
            </Tailwind>
        </Html>
    );
}

export type BuildContactSuccessEmailArgs = ContactSuccessEmailProps & {
    subject: string;
};

export async function createContactSuccessEmail({
    subject,
    ...templateProps
}: BuildContactSuccessEmailArgs) {
    const html = await render(<ContactSuccessEmail {...templateProps} />);
    const text = await render(<ContactSuccessEmail {...templateProps} />, {
        plainText: true,
    });

    return { subject, html, text };
}
