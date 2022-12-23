import { MoostodonService } from "./MoostodonService";

const service = new MoostodonService("https://mastodon.social");

service.getPublicTimeline().then((statuses) => {
  console.log(statuses);
});

import { apiClient } from "./testClient";

async function test() {
  const response = await apiClient.usersById("").get();
  console.log(response);
  const s = response?.additionalData;
}

test().then();

import { apiClient as newClient } from "./testClientNew";

async function testNew() {
  const response = await newClient.usersById("").get();
  console.log(response);
  const s = response?.additionalData;
}

testNew().then();
