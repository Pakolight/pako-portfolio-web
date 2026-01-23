import { graphClientServer } from "./graph-client.server";

// await sendMail({
//     to: "client@gmail.com",
//     subject: "We received your request",
//     text: `
// Hi!
//
// Thanks for contacting pako.work.
// We will get back to you shortly.
//
// — PaKo
//   `,
//     replyTo: "client@gmail.com",
// });


type SendMailArgs = {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string;
};

export async function sendMail({ to, subject, text, html, replyTo }: SendMailArgs) {
    const from = process.env.MAIL_FROM!;
    if (!html && !text) {
        throw new Error("Email content is required");
    }

    const message: any = {
        subject,
        body: {
            contentType: html ? "HTML" : "Text",
            content: html ?? text ?? "",
        },
        toRecipients: [
            { emailAddress: { address: to } },
        ],
    };

    if (replyTo) {
        message.replyTo = [
            { emailAddress: { address: replyTo } },
        ];
    }
    try {

        await graphClientServer
            .api(`/users/${encodeURIComponent(from)}/sendMail`)
            .post({
                message,
                saveToSentItems: true,
            });
    } catch (e: any) {
        console.error("Graph statusCode:", e?.statusCode);
        console.error("Graph code:", e?.code);
        console.error("Graph body:", e?.body);
        console.error("Graph message:", e?.message);
        throw e;
    }
    }
