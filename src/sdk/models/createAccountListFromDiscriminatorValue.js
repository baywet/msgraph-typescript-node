"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountListFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createAccountListFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.AccountList();
}
exports.createAccountListFromDiscriminatorValue = createAccountListFromDiscriminatorValue;
