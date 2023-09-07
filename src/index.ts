import "isomorphic-fetch";
import { DeviceCodeCredential } from "@azure/identity";
import { Client, MiddlewareFactory } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { getAll } from "./tasks/PageIterator";
import { getMe } from "./operations/get";
import { DebugMiddleware } from "./middlewares/DebugMiddleware";
import { ProxyMiddleware } from "./middlewares/ProxyMiddleware";

const credential = new DeviceCodeCredential({
  clientId: "8863da3d-adbf-4a05-8f30-87bab9f76292",
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: ["User.Read.All"],
});

const middleware = MiddlewareFactory.getDefaultMiddlewareChain(authProvider);

if (process.env.DEBUG) {
  middleware.splice(-1, 0, ...[new DebugMiddleware()]);
}

if (process.env.HTTPS_PROXY || process.env.HTTP_PROXY) {
  middleware.splice(
    -1,
    0,
    ...[new ProxyMiddleware(process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY)]
  );
}

const client = Client.initWithMiddleware({
  middleware: middleware,
});

async function main(client: Client) {
  await getMe(client);
  await getAll(client, "/users?$top=5");
}

main(client).catch((error) => {
  console.log(error);
});
