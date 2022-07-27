import {
    GraphClientInit
} from "module-graph-sdk"

import "module-graph-sdk/users/calendar";
import "module-graph-sdk/me/calendar";
import "module-graph-sdk/applications/application";

async function  test() {
    const client = GraphClientInit(process.env.ACCESS_TOKEN);
    
    const myEvents = await client.api("/me/calendar/events").get();
    console.log(myEvents.value);

    const applications = await client.api("/applications").get();
    console.log(applications.value);
}

test();
console.log("Hello Microsoft Graph!");