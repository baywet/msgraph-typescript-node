import {GraphServiceClient, SimpleAuthenticationProvider} from "@microsoft/msgraph-sdk-javascript";
import { DateTimeTimeZone, Event, ItemBody } from "@microsoft/msgraph-sdk-javascript/lib/src/models";
import { BodyType } from "@microsoft/msgraph-sdk-javascript/lib/src/models/bodyType";


async function  test() {
    const authProvider = new SimpleAuthenticationProvider(async() => { return process.env.ACCESS_TOKEN! });
    
    const client = GraphServiceClient.init({authProvider});
    
    const myEvents = await client.me.calendar.events.get();
    console.log(myEvents!.value);

    const applications = await client.applications.get();
    console.log(applications!.value);

    var event = new Event();
    event.subject = "Test Event"
    event.body = new ItemBody();
    event.body.content = "A very important event from Graph";
    event.body.contentType = BodyType.Html;
    event.start = new DateTimeTimeZone();
    event.start.dateTime = "2022-07-27T12:00:00";
    event.start.timeZone = "Eastern Standard Time";
    event.end = new DateTimeTimeZone();
    event.end.dateTime = "2022-07-27T13:00:00";
    event.end.timeZone = "Eastern Standard Time";
    const myEvent = await client.me.calendar.events.post(event);
    console.log(myEvent!);
}

test();
console.log("Hello Microsoft Graph!");