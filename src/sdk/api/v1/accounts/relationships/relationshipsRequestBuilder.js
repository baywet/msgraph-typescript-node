"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipsRequestBuilder = void 0;
const createRelationshipFromDiscriminatorValue_1 = require("../../../../models/createRelationshipFromDiscriminatorValue");
const createUnprocessableContentErrorFromDiscriminatorValue_1 = require("../../../../models/createUnprocessableContentErrorFromDiscriminatorValue");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/accounts/relationships */
class RelationshipsRequestBuilder {
    /**
     * Instantiates a new RelationshipsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/accounts/relationships{?id*}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        const errorMapping = {
            "422": createUnprocessableContentErrorFromDiscriminatorValue_1.createUnprocessableContentErrorFromDiscriminatorValue,
        };
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendCollectionAsync(requestInfo, createRelationshipFromDiscriminatorValue_1.createRelationshipFromDiscriminatorValue, responseHandler, errorMapping)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}
exports.RelationshipsRequestBuilder = RelationshipsRequestBuilder;
