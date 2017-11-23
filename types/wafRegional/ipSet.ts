/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface IPSetDescriptorProperties {
    Type: Value<string>
    Value: Value<string>
}

export class IPSetDescriptor extends ResourceBase {
    constructor(properties: IPSetDescriptorProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::IPSetDescriptor', properties, dependsOn)
    }
}

export interface IPSetProperties {
    IPSetDescriptors?: List<IPSetDescriptor>
    Name: Value<string>
}

export default class IPSet extends ResourceBase {
    constructor(properties: IPSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::IPSet', properties, dependsOn)
    }
}
