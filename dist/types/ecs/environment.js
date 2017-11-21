"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Environment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::Environment', properties, dependsOn);
    }
}
exports.default = Environment;
