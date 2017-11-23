"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Volumes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volumes = Volumes;
class RetryStrategy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetryStrategy = RetryStrategy;
class ContainerProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerProperties = ContainerProperties;
class MountPoints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoints = MountPoints;
class Environment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Environment = Environment;
class Ulimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ulimit = Ulimit;
class VolumesHost {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumesHost = VolumesHost;
class JobDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Batch::JobDefinition', properties, dependsOn);
    }
}
exports.default = JobDefinition;
