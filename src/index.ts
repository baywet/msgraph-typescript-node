import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { GraphBaseServiceClient } from '@microsoft/msgraph-sdk-javascript/src/graphBaseServiceClient';
import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';

const fetchRequestAdapter = new FetchRequestAdapter(new AnonymousAuthenticationProvider());

async function main() {
  const graphClient = new GraphBaseServiceClient(fetchRequestAdapter);
  const catalogs = await graphClient.appCatalogs.get();
  console.log(catalogs);
}

main().catch(e => console.error(e));
