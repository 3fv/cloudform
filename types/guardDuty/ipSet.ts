/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface IPSetProperties {
    Format: Value<string>
    Activate: Value<boolean>
    DetectorId: Value<string>
    Name?: Value<string>
    Location: Value<string>
}

export default class IPSet extends ResourceBase {
    constructor(properties?: IPSetProperties) {
        super('AWS::GuardDuty::IPSet', properties)
    }
}
