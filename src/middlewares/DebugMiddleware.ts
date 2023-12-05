import { RequestOption } from '@microsoft/kiota-abstractions';
import { Middleware } from '@microsoft/kiota-http-fetchlibrary';

export class DebugMiddleware implements Middleware {
  public next: Middleware | undefined;

  private getHeaders(headers: Headers) {
    const h = {};
    for (var header of headers) {
      // @ts-ignore
      h[header[0]] = header[1];
    }
    return h;
  }

  private log(title: string, content?: any) {
    console.log(title);
    content && console.dir(content);
  }

  private async getBody(response: Response) {
    return (
      response.headers.get('content-type')!.startsWith('application/json') &&
      response.body &&
      (await response.json())
    );
  }

  public async execute(
    url: string,
    requestInit: RequestInit,
    requestOptions?: Record<string, RequestOption>,
  ): Promise<Response> {
    this.log('');
    this.log(`${requestInit.method} ${url}`);
    this.log(
      'REQUEST HEADERS',
      this.getHeaders(requestInit.headers as Headers),
    );
    this.log('');

    const response =
      ((await this.next?.execute(
        url,
        requestInit,
        requestOptions,
      )) as Response) ??
      Promise.reject(new Error('The next middleware is not set.'));

    const responseClone = response.clone();
    this.log(`RESPONSE STATUS CODE ${responseClone!.status}`);
    this.log('RESPONSE HEADERS', this.getHeaders(responseClone!.headers));
    this.log('', await this.getBody(responseClone!));
    this.log('');
    return response;
  }
}
