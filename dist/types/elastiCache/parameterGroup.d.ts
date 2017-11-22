import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ParameterGroupProperties {
    CacheParameterGroupFamily: Value<string>;
    Description: Value<string>;
    Properties?: {
        [key: string]: Value<string>;
    };
}
export default class ParameterGroup extends ResourceBase {
    constructor(properties: ParameterGroupProperties, dependsOn?: Value<string>);
}
