import { DeviceCodeCredential, useIdentityPlugin } from '@azure/identity';
import { GraphServiceClient } from '@microsoft/msgraph-sdk-javascript';
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { DebugMiddleware } from './middlewares/DebugMiddleware';
import { cachePersistencePlugin } from '@azure/identity-cache-persistence';

const clientId =
  process.env.CLIENT_ID ?? '8863da3d-adbf-4a05-8f30-87bab9f76292';
const scopes = ['User.Read.All'];
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
const authProvider = new AzureIdentityAuthenticationProvider(
  credential,
  scopes,
);

const middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();

/*if (process.env.HTTPS_PROXY || process.env.HTTP_PROXY) {
  middlewareChain.splice(
    -1,
    0,
    ...[new ProxyMiddleware(process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY)]
  );
}*/

middlewareChain.splice(
  middlewareChain.length - 1,
  0,
  ...[new DebugMiddleware()],
);

const graphServiceClient = GraphServiceClient.init({
  middleware: middlewareChain,
  authProvider: authProvider,
});

async function main() {
  await graphServiceClient.users.get();

  await graphServiceClient.users.get({
    queryParameters: {
      select: ['displayName', 'id', 'mail', 'jobTitle'],
      top: 50,
      //count: true,
      //search: "",
      filter: "startswith(displayName, 'S')",
      orderby: ['displayName asc'],
    },
  });

  await graphServiceClient.users.byUserId(userId).get();
  /*await graphServiceClient.users.byUserId('').sendMail.post({
    message: {
      subject: "Test",
      body: {
        content: "<b>Test</b>",
        contentType: BodyType.Html
      },
      toRecipients: [
        {
          emailAddress: {
            address: "admin"
          }
        }
      ]
    }
  });*/
}

main().catch(e => console.error(e));
