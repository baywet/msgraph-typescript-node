import { Client, getGraphRestSDKClient, SimpleAuthenticationProvider } from '@microsoft/microsoft-graph-client';
import * as chai from 'chai'    
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised);

describe('Access Token', () => {
    it('should not authenticate with an empty access token', async () => {        
        const graphTypedRestClient = getGraphRestSDKClient(Client.init({    
            authProvider: new SimpleAuthenticationProvider(async () => { return "" } )
        }));
        
        try {
            await graphTypedRestClient.api("/me").get();
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal("Please provide a valid access token");
        }
    });

    it('should not authenticate with an invalid access token', async () => {        
        const graphTypedRestClient = getGraphRestSDKClient(Client.init({
            authProvider: new SimpleAuthenticationProvider(async () => { return "INVALID TOKEN" } )
        }));

        try {
            await graphTypedRestClient.api("/me").get();
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal("CompactToken parsing failed with error code: 80049217");
        }
    });

    it('should not authenticate with an expired access token', async () => {        
        const graphTypedRestClient = getGraphRestSDKClient(Client.init({
            authProvider: new SimpleAuthenticationProvider(async () => { return "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjdyRC1BOHpra0pxSnU1NjJTS0ZGb3BEalN5QjRUd3o5S0wxOENSSmtZM3ciLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mNjhhOGJjZS03ZjRiLTRiMWUtOTJiZC01MjY3ZTBhNzIxOTEvIiwiaWF0IjoxNjY0NDYwNzAzLCJuYmYiOjE2NjQ0NjA3MDMsImV4cCI6MTY2NDQ2NDg1OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQWZQRFRpV1JIdkxFRFMxcWcreHlzNFNad3FHY1FnYTZ6VU9nTTc0cUI5WlJhalAvVzFwNklTakdCOWM1bkRMaTkiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkxldmVydCIsImdpdmVuX25hbWUiOiJTw6liYXN0aWVuIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjQuMjAzLjkuMTg4IiwibmFtZSI6IlPDqWJhc3RpZW4gTGV2ZXJ0Iiwib2lkIjoiMDJiMTg2OGUtMzdlNy00YzBlLWE5NTYtODQ2ZGFkYWFiMjk4IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxQzA5QTg4MjEiLCJyaCI6IjAuQVVZQXpvdUs5a3RfSGt1U3ZWSm40S2Noa1FNQUFBQUFBQUFBd0FBQUFBQUFBQUNBQUJFLiIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWQuQWxsIENhbGVuZGFycy5SZWFkLlNoYXJlZCBDYWxlbmRhcnMuUmVhZFdyaXRlIENoYW5uZWxNZXNzYWdlLlJlYWQuQWxsIENoYXQuUmVhZEJhc2ljIEdyb3VwLlJlYWQuQWxsIE1haWwuUmVhZCBNYWlsYm94U2V0dGluZ3MuUmVhZCBvcGVuaWQgUGVvcGxlLlJlYWQgcHJvZmlsZSBTaXRlcy5SZWFkLkFsbCBUZWFtLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkIFVzZXIuUmVhZC5BbGwgVXNlci5SZWFkV3JpdGUgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJRY2ZkZklPRDhxSGRtWUEyZmlMSVYxTVdGWEliVUU3bkdfcVFtcG1wWmRVIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiZjY4YThiY2UtN2Y0Yi00YjFlLTkyYmQtNTI2N2UwYTcyMTkxIiwidW5pcXVlX25hbWUiOiJhZG1pbkBNMzY1eDU1NzI2MzAwLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbWluQE0zNjV4NTU3MjYzMDAub25taWNyb3NvZnQuY29tIiwidXRpIjoiNzBBS1FtWUJyRUdxcEl1bkxJWVNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJmVnFpUlBUS2twY0xVTWFhUnFoZTU3czdpVG9IQWdmaDhZakd3WTNsQ0I0In0sInhtc190Y2R0IjoxNjM5NjQ0Nzc0fQ.R3qnKS6EmDhlD4AoFJy7554Wryrbi1VTSIDOuh8S6o-lfpcrKWDHkrPKzPrOXsFsYhwem-a14_G03J1uAyieb8KuE7XDXthN5m66D1ibID5EXRA10FCgd2o_Ywz-LdN7Q9LEFkf2zI0Qs22HRmBilf065HS16C9Som5oHDb_udOm8XzdNEvtb-VVCWjKZYLuHkh9lO5Qp53BA0TITsfXGyWdPvP10WzOdx13wZo0goSSZOdz2bGi2lA22LwIIy1JoaLCyVGNoOtmzIcvm_fgF4u_ZPnMkWzaZ8qOI0FsFsrtSUMMwooJF0wqTb8xeSc5q2gZotcui7o251rVHMbuPQ" } )
        }));

        try {
            await graphTypedRestClient.api("/me").get();
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal("Access token has expired or is not yet valid.");
        }
    });    

    it('should authenticate with a valid access token', async () => {
        const graphTypedRestClient = getGraphRestSDKClient(Client.init({
            authProvider: new SimpleAuthenticationProvider(async () => { return process.env.ACCESS_TOKEN! } )
        }));

        const user = await graphTypedRestClient.api("/me").get();
        chai.expect(user.id!).to.not.be.empty;
    });
});