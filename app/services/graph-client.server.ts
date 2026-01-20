import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";


const {
    MS_TENANT_ID,
    MS_CLIENT_ID,
    MS_CLIENT_SECRET,
} = process.env;

if (!MS_TENANT_ID || !MS_CLIENT_ID || !MS_CLIENT_SECRET) {
    throw new Error("Microsoft Graph env variables are missing");
}

const credential = new ClientSecretCredential(
    MS_TENANT_ID,
    MS_CLIENT_ID,
    MS_CLIENT_SECRET
);

export const graphClientServer = Client.initWithMiddleware({
    authProvider: {
        getAccessToken: async () => {
            const token = await credential.getToken(
                "https://graph.microsoft.com/.default"
            );

            if (!token?.token) {
                throw new Error("Failed to acquire Microsoft Graph token");
            }

            return token.token;
        },
    },
});
