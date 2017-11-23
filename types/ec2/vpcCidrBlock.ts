/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface VPCCidrBlockProperties {
    AmazonProvidedIpv6CidrBlock?: Value<boolean>
    CidrBlock?: Value<string>
    VpcId: Value<string>
}

export default class VPCCidrBlock extends ResourceBase {
    constructor(properties: VPCCidrBlockProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VPCCidrBlock', properties, dependsOn)
    }
}
