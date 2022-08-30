import { Client, getGraphRestSDKClient, GraphRestSDKClient, SimpleAuthenticationProvider } from '@microsoft/microsoft-graph-client';
import "@microsoft/microsoft-graph-client/users"
import { MicrosoftGraphUser } from "@microsoft/microsoft-graph-types";
import * as chai from 'chai'    
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised);

describe('/users', () => {
    let graphTypedRestClient: GraphRestSDKClient;
    let newUserId: string;
    const randomId: string = "cbb2e86c-44bc-4532-8440-9cdbed796789";
    const timestamp: number = Date.now();

    beforeEach(() => {
        graphTypedRestClient = getGraphRestSDKClient(Client.init({    
            authProvider: new SimpleAuthenticationProvider(async () => { return process.env.ACCESS_TOKEN! } ),
            // SDK should provide a way to detect the emitted URL for debugging purposes. Now it just console.log.
            //debugLogging: true
        }));
    });

    // #region GET
    it('HTTP 200 | GET | /me', async () => {        
        const me = await graphTypedRestClient.api("/me").get();
        chai.expect(me).to.not.be.null;
    });

    it('HTTP 200 | GET | /users', async () => {        
        const users = await graphTypedRestClient.api("/users").get();
        chai.expect(users).to.not.be.null;
        chai.expect(users).to.not.have.property("@odata.count");
        chai.expect(users.value!.length).to.be.greaterThan(0);
    });

    it("HTTP 200 | GET | /users/?$filter=userType eq 'guest'", async () => {        
        const users = await graphTypedRestClient.api("/users").get({}, { $filter: "userType eq 'guest'"});
        chai.expect(users).to.not.be.null;
        chai.expect(users.value!.length).to.be.greaterThan(0);
    });

    it("HTTP 200 | GET | /users?$count=true&$filter=Department eq 'Finance'&$orderBy=displayName&$select=id,displayName,department", async () => {        
        const users = await graphTypedRestClient.api("/users").get({ 
            ConsistencyLevel: "Eventual"
        }, { 
            $count: true,
            $filter: "Department eq 'Finance'",
            $orderby: "displayName",
            $select: "id,displayName,department"
        });
        chai.expect(users).to.not.be.null;
        chai.expect(users.value!.length).to.be.greaterThan(0);
    });

    it("HTTP 400 | GET | /users?$count=true&$filter=Department eq 'Finance'&$orderBy=displayName&$select=id,displayName,department", async () => {        
        try {
            const users = await graphTypedRestClient.api("/users").get({}, { 
                $filter: "Department eq 'Finance'",
                $orderby: "displayName",
                $select: "id,displayName,department"
            });
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal("Sorting not supported for current query.");
        }
    });

    it("HTTP 200 | GET | /users?$count=true&$search='displayName:room'&$filter=endsWith(mail,'microsoft.com')&$orderBy=displayName&$select=id,displayName,mail", async () => {        
        const users = await graphTypedRestClient.api("/users").get({ 
            ConsistencyLevel: "Eventual"
        }, { 
            $count: true,
            $filter: "endsWith(mail, 'microsoft.com')",
            $orderby: "displayName",
            $select: "id,displayName,email",
            // Search doesn't work Syntax error: character ':' is not valid at position 11 in 'displayName:room'.
            // It requires quotes IN the search syntax. I think we should wrap it in the SDK.
            $search: '"displayName:room"'
        });
        chai.expect(users).to.not.be.null;
        chai.expect(users.value!.length).to.be.greaterThan(0);
    });

    it('HTTP 200 | GET | /users?$count=true', async () => {        
        const users = await graphTypedRestClient.api("/users").get({ ConsistencyLevel: 'Eventual' }, { $count: true });
        chai.expect(users).to.not.be.null;
        chai.expect(users).to.have.property("@odata.count");
        chai.expect(users).property("@odata.count").to.be.greaterThan(0);
    });
    
    it('HTTP 400 | GET | /users?$count=true', async () => {        
        const users = await graphTypedRestClient.api("/users").get({}, { $count: true });
        chai.expect(users).to.not.be.null;
        chai.expect(users).to.not.have.property("@odata.count");
    });
    
    it('HTTP 200 | GET | /users/{user-id}', async () => {        
        const user = await graphTypedRestClient.api("/users/{user-id}", process.env.USER_ID!).get();
        chai.expect(user).to.not.be.null;
        chai.expect(user.id).to.not.be.null;
        chai.expect(user.id).to.equal(process.env.USER_ID);
    });
    
    it('HTTP 200 | GET | /users/{user-principal-name}', async () => {        
        const user = await graphTypedRestClient.api("/users/{user-id}", process.env.USER_PRINCIPAL_NAME!).get();
        chai.expect(user).to.not.be.null;
        chai.expect(user.userPrincipalName).to.not.be.null;
        chai.expect(user.userPrincipalName).to.equal(process.env.USER_PRINCIPAL_NAME);
    });
    // #endregion

    // #region PATCH
    it('HTTP 204 | PATCH | /users/{user-id}', async () => {        
        const department: string = `Sales & Marketing (${timestamp})`;
        
        // Updating the user with the timestamped department name
        await graphTypedRestClient.api("/users/{user-id}", process.env.USER_ID!).patch({ department: department });
        
        // Retrieve the newly updated user and validate its department value
        const user: MicrosoftGraphUser = await graphTypedRestClient.api("/users/{user-id}", process.env.USER_ID!).get({}, { $select: "department"});
        chai.expect(user).to.not.be.null;
        chai.expect(user.department).to.equal(department);
    });

    it('HTTP 404 | PATCH | /users/{user-id}', async () => {        
        const department: string = `Sales & Marketing (${timestamp})`;
        
        try {
            // Updating the user with the timestamped department name
            await graphTypedRestClient.api("/users/{user-id}", randomId).patch({ department: department });
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal(`Resource '${randomId}' does not exist or one of its queried reference-property objects are not present.`);
        }
    });
    // #endregion

    // #region POST
    it('HTTP 204 | POST | /users', async () => {
        const user = await graphTypedRestClient.api("/users").post(
            {
                "accountEnabled": true,
                "city": "Seattle",
                "country": "United States",
                "department": "Sales & Marketing",
                "displayName": `Melissa Darrow (${timestamp})`,
                "givenName": "Melissa",
                "jobTitle": "Marketing Director",
                "mailNickname": `MelissaD-${timestamp}`,
                "passwordPolicies": "DisablePasswordExpiration",
                "passwordProfile": {
                    "password": "f150cc73-a481-d881-bf29-d1804937ebb5",
                    "forceChangePasswordNextSignIn": false
                },
                "officeLocation": "131/1105",
                "postalCode": "98052",
                "preferredLanguage": "en-US",
                "state": "WA",
                "streetAddress": "9256 Towne Center Dr., Suite 400",
                "surname": `Darrow ${timestamp}`,
                "mobilePhone": "+1 206 555 0110",
                "usageLocation": "US",
                "userPrincipalName": `MelissaD-${timestamp}@${process.env.DOMAIN_NAME}`
            }
        );
        
        newUserId = user.id!;
        // Retrieve the newly created user and validate its display name
        chai.expect(user).to.not.be.null;
        chai.expect(user.displayName).to.equal(`Melissa Darrow (${timestamp})`);
    });
    // #endregion

    // #region DELETE
    it('HTTP 204 | DELETE | /users', async () => {
        const response = await graphTypedRestClient.api("/users/{user-id}", newUserId).delete();
        chai.expect(response).to.equal("Success");
    });
    
    it('HTTP 404 | DELETE | /users', async () => {

        try {            
            const response = await graphTypedRestClient.api("/users/{user-id}", randomId).delete();
        } catch(error: any) {
            chai.expect(error).to.be.an("Error");
            chai.expect(error.message).to.equal(`Resource '${randomId}' does not exist or one of its queried reference-property objects are not present.`);
        }        
    });
    // #endregion
});