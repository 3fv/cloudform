"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Parameter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Parameter', properties, dependsOn);
    }
}
exports.default = Parameter;
