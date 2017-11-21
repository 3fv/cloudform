"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Rule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Events::Rule', properties, dependsOn);
    }
}
exports.default = Rule;
