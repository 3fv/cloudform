"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class WaitConditionHandle extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFormation::WaitConditionHandle', properties, dependsOn);
    }
}
exports.default = WaitConditionHandle;
