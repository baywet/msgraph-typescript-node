import { RequestOption } from '@microsoft/kiota-abstractions';
import { Middleware } from '@microsoft/kiota-http-fetchlibrary';

export class DebugMiddleware implements Middleware {
  public next: Middleware | undefined;
  private obfuscate: boolean = true;

  public constructor(obfuscate: boolean) {
    this.obfuscate = obfuscate;
  }

  private getHeaders(headers: Headers) {
    const headerCopy = {};
    for (var header of headers) {
      // @ts-ignore
      if (header[0] === 'authorization' && this.obfuscate) {
        // @ts-ignore
        headerCopy[header[0]] = 'Bearer ' + header[1].split(' ')[1].slice(0, 5) + '...';
      } else {
        // @ts-ignore
        headerCopy[header[0]] = header[1];
      }
    }
    return headerCopy;
  }

  private log(title: string, content?: any) {
    console.log(title);

    if (content) {
      console.log(JSON.stringify(content, null, 2));
    }
  }

  private async getBody(response: Response) {
    return (
      (response.headers.get('content-type')?.startsWith('application/json') &&
        response.body &&
        (await response.json())) ??
      {}
    );
  }

  public async execute(
    url: string,
    requestInit: RequestInit,
    requestOptions?: Record<string, RequestOption>,
  ): Promise<Response> {
    this.log('=== Request ===');
    this.log(`${requestInit.method} ${url}`);
    this.log('Headers', this.getHeaders(requestInit.headers as Headers));
    requestInit.body && this.log('Body', JSON.parse(new TextDecoder().decode(requestInit.body as Uint8Array)));
    this.log('');

    const response =
      ((await this.next?.execute(url, requestInit, requestOptions)) as Response) ??
      Promise.reject(new Error('The next middleware is not set.'));

    const responseClone = response.clone();
    this.log('=== Response ===');
    this.log(`${responseClone!.statusText} ${responseClone!.status}`);
    this.log('Headers', this.getHeaders(responseClone!.headers));
    this.log('Body', await this.getBody(responseClone!));
    this.log('');
    return response;
  }
}
