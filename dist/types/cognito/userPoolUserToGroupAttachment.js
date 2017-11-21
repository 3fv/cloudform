"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class UserPoolUserToGroupAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::UserPoolUserToGroupAttachment', properties, dependsOn);
    }
}
exports.default = UserPoolUserToGroupAttachment;
