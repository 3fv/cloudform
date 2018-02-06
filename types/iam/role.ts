/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Policy {
    PolicyDocument: any
    PolicyName: Value<string>

    constructor(properties: Policy) {
        Object.assign(this, properties)
    }
}

export interface RoleProperties {
    AssumeRolePolicyDocument: any
    ManagedPolicyArns?: List<Value<string>>
    Path?: Value<string>
    Policies?: List<Policy>
    RoleName?: Value<string>
}

export default class Role extends ResourceBase {
    constructor(properties?: RoleProperties) {
        super('AWS::IAM::Role', properties)
    }
}
