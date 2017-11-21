"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Cluster extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Redshift::Cluster', properties, dependsOn);
    }
}
exports.default = Cluster;
