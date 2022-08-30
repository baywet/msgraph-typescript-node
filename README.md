# msgraph-typescript-node
Base repository for all Microsoft Graph TypeScript + Node tests

## How to use

1. Copy the `.env.sample` file as a new `.env` file at the root of the project
2. Replace the values according to your target test environment

| Key         | Value     |
|--------------|-----------|
| ACCESS_TOKEN | Grab a token from any source (Graph Explorer, Graph PowerShell SDK, etc.) |
| USER_ID      | The `id` property of the user you want to test with  |
| USER_PRINCIPAL_NAME      | The `userPrincipalName` property of the user you want to test with  |
| DOMAIN_NAME      | The domain that you are testing with |

3. `npm i`
4. `npm run test`

The tests are not validating the access token so if you don't have enough permissions, some tests will fail. If all permissions are available on the access token, you should have a successful run.