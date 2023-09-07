import { Middleware } from "@microsoft/microsoft-graph-client";
import { Context } from "@microsoft/microsoft-graph-client";
import { HttpsProxyAgent } from "hpagent";

export class ProxyMiddleware implements Middleware {
  private url: string;

  private nextMiddleware!: Middleware;

  public constructor(url: string = "http://localhost:8000") {
    this.url = url;
  }

  public async execute(context: Context): Promise<void> {
    if (context.options) {
      context.options.agent = new HttpsProxyAgent({
        proxy: this.url,
        rejectUnauthorized: false,
      });
    }

    return await this.nextMiddleware.execute(context);
  }

  public setNext(next: Middleware): void {
    this.nextMiddleware = next;
  }
}
