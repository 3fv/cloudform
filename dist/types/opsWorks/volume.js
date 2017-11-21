"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Volume extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Volume', properties, dependsOn);
    }
}
exports.default = Volume;
