"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Trail extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudTrail::Trail', properties, dependsOn);
    }
}
exports.default = Trail;
