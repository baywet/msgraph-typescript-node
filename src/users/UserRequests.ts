import { GraphServiceClient } from '@microsoft/msgraph-sdk-javascript';
import { BodyType } from '@microsoft/msgraph-sdk-javascript/lib/src/models';
import { Headers } from '@microsoft/kiota-abstractions';

export class UserRequests {
  public static allScopes: string[] = ['User.Read.All', 'Mail.Send'];
  public static async execute(client: GraphServiceClient) {
    const userId = process.env.USER_ID ?? '02b1868e-37e7-4c0e-a956-846dadaab298';

    await client.users.get();

    await client.users.get({
      queryParameters: {
        select: ['displayName', 'id', 'mail', 'jobTitle'],
        top: 50,
        filter: "startswith(displayName, 'S')",
        orderby: ['displayName'],
        count: true,
      },
      headers: new Headers([['ConsistencyLevel', new Set(['Eventual'])]]),
    });

    const me = await client.users.byUserId(userId).get();
    await client.users.byUserId(userId).sendMail.post({
      message: {
        subject: 'Test',
        body: {
          content: '<b>Test</b>',
          contentType: BodyType.Html,
        },
        toRecipients: [
          {
            emailAddress: {
              address: me?.mail,
            },
          },
        ],
      },
    });
  }
}
