"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SqlInjectionMatchSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::SqlInjectionMatchSet', properties, dependsOn);
    }
}
exports.default = SqlInjectionMatchSet;
