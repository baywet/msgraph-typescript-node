import "isomorphic-fetch";
import { DeviceCodeCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

const clientId = '8863da3d-adbf-4a05-8f30-87bab9f76292';
const tenantId = 'common';
const scopes = ['User.Read'];

const credential = new DeviceCodeCredential({
    clientId,
    tenantId,
    userPromptCallback: (deviceCodeInfo) => {
        console.log(deviceCodeInfo);
    },
});

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes
});

const client = Client.initWithMiddleware({
    debugLogging: true,
    authProvider
});

async function main() {
    let user = await client.api('/me').get();
    console.log(user);
}

main().catch((error) => {
    console.error('Error:', error);
});