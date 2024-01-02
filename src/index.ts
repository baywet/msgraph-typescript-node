import "isomorphic-fetch";
import { DeviceCodeCredential } from "@azure/identity";
import { BatchRequestBody, BatchRequestData, BatchResponseContent, Client, ClientOptions } from "@microsoft/microsoft-graph-client";
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

async function resolveGraphUserIds(client: Client, userIds: string[]): Promise<any[]> {
  const batchRequestData = userIds.map<BatchRequestData>((id) => ({
    id,
    url: `/users/${id}?$select=id,displayName`,
    method: "GET",
  }));

  const batchRequestBody: BatchRequestBody = {
    requests: batchRequestData,
  };

  const batchResponse = await client.api('/$batch').post(batchRequestBody);
  const batchResponseContent = new BatchResponseContent(batchResponse);

  return Promise.all(
    userIds.map(async (id) => {
      const response = batchResponseContent.getResponseById(id);
      if (response.status === 200) {
        return response.json();
      } else {
        return null;
      }
    }),
  );
}

async function main(client: Client) {
  const users = await resolveGraphUserIds(client, ["02b1868e-37e7-4c0e-a956-846dadaab298", "80b33b86-214f-4a42-8888-4029bf54a2af"]);
  console.log(users);
}

main(client).catch((error) => {
  console.log(error);
});
