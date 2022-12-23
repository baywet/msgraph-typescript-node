"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplicationFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createApplicationFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Application();
}
exports.createApplicationFromDiscriminatorValue = createApplicationFromDiscriminatorValue;
