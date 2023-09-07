import { Client } from "@microsoft/microsoft-graph-client";

export const getMe = async (client: Client) => {
  return await client.api("/me").get();
};
