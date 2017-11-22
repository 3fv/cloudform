"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Policy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::Policy', properties, dependsOn);
    }
}
exports.Policy = Policy;
class Group extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::Group', properties, dependsOn);
    }
}
exports.default = Group;
