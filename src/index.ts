import { DeviceCodeCredential, useIdentityPlugin } from '@azure/identity';
import { GraphServiceClient } from '@microsoft/msgraph-sdk-javascript';
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { DebugMiddleware } from './middlewares/DebugMiddleware';
import { cachePersistencePlugin } from '@azure/identity-cache-persistence';
import { ProxyMiddleware } from './middlewares/ProxyMiddleware';
import { Headers } from '@microsoft/kiota-abstractions';
import { HttpsProxyAgent } from 'hpagent';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { UserRequests } from './users/UserRequests';

const clientId = process.env.CLIENT_ID ?? '8863da3d-adbf-4a05-8f30-87bab9f76292';
const scopes = [...UserRequests.allScopes];
const userId = process.env.USER_ID ?? '02b1868e-37e7-4c0e-a956-846dadaab298';

useIdentityPlugin(cachePersistencePlugin);

const credential = new DeviceCodeCredential({
  clientId: clientId,
  tokenCachePersistenceOptions: {
    enabled: true,
  },
  userPromptCallback: info => {
    console.log(info.message);
  },
});
const authProvider = new AzureIdentityAuthenticationProvider(credential, scopes);

const middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();

//if (process.env.HTTPS_PROXY || process.env.HTTP_PROXY) {
middlewareChain.splice(-1, 0, ...[new ProxyMiddleware(process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY)]);
//}

middlewareChain.splice(middlewareChain.length - 1, 0, ...[new DebugMiddleware(true)]);

const graphServiceClient = GraphServiceClient.init({
  middleware: middlewareChain,
  authProvider: authProvider,
  fetchOptions:
    process.env.HTTPS_PROXY || process.env.HTTP_PROXY
      ? {
          agent: new HttpsProxyAgent({
            proxy: process.env.HTTPS_PROXY!,
            rejectUnauthorized: false,
          }),
        }
      : undefined,
});

async function main() {
  await UserRequests.execute(graphServiceClient);
}

main().catch(e => console.error(e));
