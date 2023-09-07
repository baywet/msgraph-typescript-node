import {
  PageIterator,
  PageCollection,
  PageIteratorCallback,
  Client,
} from "@microsoft/microsoft-graph-client";
export async function getAll(client: Client, endpoint: string) {
  // Keeps an array of results
  const results: any[] = [];
  try {
    // Makes request to fetch mails list. Which is expected to have multiple pages of data.
    let response: PageCollection = await client.api(endpoint).get();
    // A callback function to be called for every item in the collection. This call back should return boolean indicating whether not to continue the iteration process.
    let callback: PageIteratorCallback = (data: any) => {
      // Pushing the data to the results array
      results.push(data);
      return true;
    };
    // Creating a new page iterator instance with client a graph client instance, page collection response from request and callback
    let pageIterator = new PageIterator(client, response, callback);
    // This iterates the collection until the nextLink is drained out.
    await pageIterator.iterate();
  } catch (e) {
    throw e;
  }
}
