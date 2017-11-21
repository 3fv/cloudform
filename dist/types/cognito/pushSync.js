"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PushSync extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::PushSync', properties, dependsOn);
    }
}
exports.default = PushSync;
