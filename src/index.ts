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

    const myEvent = await client.api("/me/calendar/events").post({
        "subject": "Test Event",
        "body": {
            "contentType": "html",
            "content": "A very important event from Graph"
        },
        "start": {
            "dateTime": "2022-07-27T12:00:00",
            "timeZone": "Eastern Standard Time"
        },
        "end": {
            "dateTime": "2022-07-27T13:00:00",
            "timeZone": "Eastern Standard Time"
        },
    });
    console.log(myEvent);
}

test();
console.log("Hello Microsoft Graph!");