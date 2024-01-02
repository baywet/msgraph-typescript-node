import { DeviceCodeCredential, useIdentityPlugin } from '@azure/identity';
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';
import { cachePersistencePlugin } from '@azure/identity-cache-persistence';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { GraphClient } from './generated/graphClient';

const clientId = process.env.CLIENT_ID ?? '8863da3d-adbf-4a05-8f30-87bab9f76292';
const scopes = ['User.Read.All', 'Mail.Send'];
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

/*const middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();
middlewareChain.splice(middlewareChain.length - 1, 0, ...[new DebugMiddleware(true)]);*/

const fetchRequestAdapter = new FetchRequestAdapter(authProvider);

async function main() {
  const graphClient = new GraphClient(fetchRequestAdapter);
  const catalogs = await graphClient.appCatalogs.get();
  console.log(catalogs);

  /*const results = await graphClient.search.query.post({
    requests: [{ entityTypes: ['person'], query: { queryString: 'displayName:John' } }],
  });
  console.log(results);

  await graphClient.users.byUserId(userId).sendMail.post({
    message: {
      subject: 'Hello World!',
      toRecipients: [{ emailAddress: { address: me?.mail ?? '' } }],
    },
  });*/
}

main().catch(e => console.error(e));
