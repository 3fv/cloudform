"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Source {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Source = Source;
class ChefConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ChefConfiguration = ChefConfiguration;
class StackConfigurationManager {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StackConfigurationManager = StackConfigurationManager;
class RdsDbInstance {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RdsDbInstance = RdsDbInstance;
class ElasticIp {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticIp = ElasticIp;
class Stack extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Stack', properties, dependsOn);
    }
}
exports.default = Stack;
