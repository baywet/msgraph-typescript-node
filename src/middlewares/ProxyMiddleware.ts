import { RequestOption } from '@microsoft/kiota-abstractions';
import { Middleware } from '@microsoft/kiota-http-fetchlibrary';
import { HttpsProxyAgent } from 'hpagent';

export class ProxyMiddleware implements Middleware {
  private url: string;
  public next: Middleware | undefined;

  public constructor(url: string = 'http://localhost:8000') {
    this.url = url;
  }

  public async execute(
    url: string,
    requestInit: RequestInit,
    requestOptions?: Record<string, RequestOption>,
  ): Promise<Response> {
    if (requestOptions) {
      requestOptions['agent'] = {
        agent: new HttpsProxyAgent({
          proxy: this.url,
          rejectUnauthorized: false,
        }),
        getKey: () => 'agent',
      } as RequestOption;
    }

    return (
      (await this.next?.execute(url, requestInit, requestOptions)) ??
      Promise.reject(new Error('The next middleware is not set.'))
    );
  }
}
