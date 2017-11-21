"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SqlInjectionMatchTuple extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::SqlInjectionMatchTuple', properties, dependsOn);
    }
}
exports.default = SqlInjectionMatchTuple;
