"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TargetGroupAttribute extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancingV2::TargetGroupAttribute', properties, dependsOn);
    }
}
exports.default = TargetGroupAttribute;
