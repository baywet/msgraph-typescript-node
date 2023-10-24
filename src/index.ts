import { DeviceCodeCredential } from "@azure/identity";
import { GraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';

const credential = new DeviceCodeCredential({
  clientId: "8863da3d-adbf-4a05-8f30-87bab9f76292",
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const scopes = ["User.Read.All"];
const authProvider = new AzureIdentityAuthenticationProvider(credential, scopes);
const graphServiceClient = GraphServiceClient.init({ authProvider });

async function main() {
  const fullUsers = await graphServiceClient.users.get();
  console.log(fullUsers);
  
  const lightUsers = await graphServiceClient.users.get({ queryParameters: { select: ["displayName"] } });
  console.log(lightUsers);
}

main().catch((e) => console.error(e));