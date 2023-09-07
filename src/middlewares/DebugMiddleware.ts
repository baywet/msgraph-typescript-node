/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DebugMiddleware
 */
import { Context } from "@microsoft/microsoft-graph-client";
import { Middleware } from "@microsoft/microsoft-graph-client";

/**
 * @interface
 * Signature to represent the header key-value pair
 */
type InspectedHeader = {
  key: string;
  value: string;
};

/**
 * Class representing DebugMiddleware
 * @class
 * Class
 * @implements Middleware
 */
export class DebugMiddleware implements Middleware {
  /**
   * @private
   * A member to hold next middleware in the middleware chain
   */
  private nextMiddleware?: Middleware;

  /**
   * @private
   * To get the headers from the response
   * @param headers Headers to inspect
   * @returns
   */
  private getHeaders(headers: Headers): InspectedHeader[] {
    const h: InspectedHeader[] = [];

    for (var header of headers.entries()) {
      h.push({ key: header[0], value: header[1] });
    }

    return h;
  }

  /**
   * To execute the current middleware
   * @public
   * @async
   * @param {Context} context - The context object of the request
   * @returns A Promise that resolves to nothing
   */
  public async execute(context: Context): Promise<void> {
    console.debug("");
    console.debug(`Request: ${context.request}`);
    console.debug(JSON.stringify(context.options, null, 2));

    await this.nextMiddleware?.execute(context);

    const response = context.response?.clone();

    if (response) {
      const headers = this.getHeaders(response.headers);
      console.debug("");
      console.debug("Response headers:");
      console.debug(JSON.stringify(headers, null, 2));
      if (
        headers.find(
          (f) =>
            f.key == "content-type" && f.value.startsWith("application/json")
        ) &&
        response.body
      ) {
        console.debug("");
        console.debug("Response body:");
        console.debug(JSON.stringify(await response.json(), null, 2));
      }
    }
  }

  /**
   * @public
   * To set the next middleware in the chain
   * @param {Middleware} next - The middleware instance
   * @returns Nothing
   */
  public setNext(next: Middleware): void {
    this.nextMiddleware = next;
  }
}
