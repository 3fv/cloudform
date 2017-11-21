"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ActionTypeId extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ActionTypeId', properties, dependsOn);
    }
}
exports.default = ActionTypeId;
