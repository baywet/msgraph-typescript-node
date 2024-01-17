import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { newGraphServiceClient } from '@microsoft/msgraph-sdk-javascript';
import '@microsoft/msgraph-sdk-javascript-appCatalogs';
import '@microsoft/msgraph-sdk-javascript-admin';
import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';

const fetchRequestAdapter = new FetchRequestAdapter(new AnonymousAuthenticationProvider());

async function main() {
  const graphClient = newGraphServiceClient(fetchRequestAdapter);
  // const appCatalogClient = newAppCatalogsServiceClient(fetchRequestAdapter);
  // appCatalogClient.appCatalogs.get();
  const catalogs = await graphClient.appCatalogs.teamsApps.get();
  const admins = await graphClient.admin.get();
  console.log(catalogs);
  console.log(admins);
}

main().catch(e => console.error(e));
