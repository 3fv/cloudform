import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PolicyProperties {
    PolicyDocument: any;
    PolicyName: Value<string>;
}
export declare class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RoleProperties {
    AssumeRolePolicyDocument: any;
    ManagedPolicyArns?: List<Value<string>>;
    Path?: Value<string>;
    Policies?: List<Policy>;
    RoleName?: Value<string>;
}
export default class Role extends ResourceBase {
    constructor(properties: RoleProperties, dependsOn?: Value<string> | Value<string>[]);
}
