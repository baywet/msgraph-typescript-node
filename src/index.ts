import "isomorphic-fetch";
import { DeviceCodeCredential } from "@azure/identity";
import {
  Client,
  ClientOptions,
  PageIterator,
} from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

const credential = new DeviceCodeCredential({
  clientId: "8863da3d-adbf-4a05-8f30-87bab9f76292",
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ["User.Read.All"],
});

let clientOptions: ClientOptions = {
  authProvider: authProvider,
};

const client = Client.initWithMiddleware(clientOptions);

async function main(client: Client) {
  const groupId = "d6807a49-7a3c-488b-8d2e-03f3ed4367d8";
  const results = [];
  const res = await client.api(`/groups/${groupId}/members`).top(5).get();
  const pageIterator = new PageIterator(client, res, (data) => {
    results.push(data);
    return true;
  });
  await pageIterator.iterate();
  console.log(results.length);
}

main(client).catch((error) => {
  console.log(error);
});
