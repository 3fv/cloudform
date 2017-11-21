"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeploymentConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::DeploymentConfiguration', properties, dependsOn);
    }
}
exports.default = DeploymentConfiguration;
