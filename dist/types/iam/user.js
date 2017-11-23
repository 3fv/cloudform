"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LoginProfile {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoginProfile = LoginProfile;
class Policy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Policy = Policy;
class User extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::User', properties, dependsOn);
    }
}
exports.default = User;
