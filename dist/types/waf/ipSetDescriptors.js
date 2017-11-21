"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IPSetDescriptors extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::IPSetDescriptors', properties, dependsOn);
    }
}
exports.default = IPSetDescriptors;
