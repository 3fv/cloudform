"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Build extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::Build', properties, dependsOn);
    }
}
exports.default = Build;
