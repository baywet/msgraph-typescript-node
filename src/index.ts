import "isomorphic-fetch";
import { DeviceCodeCredential } from "@azure/identity";
import { Client, ClientOptions } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

const credential = new DeviceCodeCredential({
  clientId: "8863da3d-adbf-4a05-8f30-87bab9f76292",
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ["User.Read"],
});

let clientOptions: ClientOptions = {
  authProvider: authProvider,
};

const client = Client.initWithMiddleware(clientOptions);

async function main(client: Client) {
  const res = await client.api(`me`).get();
  console.log(res);
}

main(client).catch((error) => {
  console.log(error);
});
