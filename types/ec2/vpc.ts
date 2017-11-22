/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'



export interface VPCProperties {
    CidrBlock: Value<string>
    EnableDnsHostnames?: Value<boolean>
    EnableDnsSupport?: Value<boolean>
    InstanceTenancy?: Value<string>
    Tags?: ResourceTag[]
}

export default class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPC', properties, dependsOn)
    }
}