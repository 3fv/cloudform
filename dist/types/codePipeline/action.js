"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Action extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::Action', properties, dependsOn);
    }
}
exports.default = Action;
