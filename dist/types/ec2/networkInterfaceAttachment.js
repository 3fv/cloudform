"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NetworkInterfaceAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::NetworkInterfaceAttachment', properties, dependsOn);
    }
}
exports.default = NetworkInterfaceAttachment;
