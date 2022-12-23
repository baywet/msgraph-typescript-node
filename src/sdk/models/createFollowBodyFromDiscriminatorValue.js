"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFollowBodyFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createFollowBodyFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.FollowBody();
}
exports.createFollowBodyFromDiscriminatorValue = createFollowBodyFromDiscriminatorValue;
