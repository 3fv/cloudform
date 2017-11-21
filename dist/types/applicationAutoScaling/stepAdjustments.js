"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StepAdjustments extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::StepAdjustments', properties, dependsOn);
    }
}
exports.default = StepAdjustments;
