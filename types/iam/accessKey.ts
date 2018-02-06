/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface AccessKeyProperties {
    Serial?: Value<number>
    Status?: Value<string>
    UserName: Value<string>
}

export default class AccessKey extends ResourceBase {
    constructor(properties?: AccessKeyProperties) {
        super('AWS::IAM::AccessKey', properties)
    }
}
