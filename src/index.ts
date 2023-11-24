import { DeviceCodeCredential } from "@azure/identity";
import { GraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { MiddlewareFactory } from "@microsoft/kiota-http-fetchlibrary";
import { ProxyMiddleware } from "./middlewares/ProxyMiddleware";

const credential = new DeviceCodeCredential({
  clientId: process.env.CLIENT_ID ?? "",
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const scopes = ["User.Read.All"];
const authProvider = new AzureIdentityAuthenticationProvider(credential, scopes);

const middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();

/*if (process.env.HTTPS_PROXY || process.env.HTTP_PROXY) {
  middlewareChain.splice(
    -1,
    0,
    ...[new ProxyMiddleware(process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY)]
  );
}*/

const graphServiceClient = GraphServiceClient.init({ 
  middleware: middlewareChain, 
  authProvider: authProvider
});

async function main() {
  const fullUsers = await graphServiceClient.users.get();
  console.log(fullUsers);
  
  const lightUsers = await graphServiceClient.users.get({ queryParameters: { select: ["displayName"] } });
  console.log(lightUsers);
}

main().catch((e) => console.error(e));