/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SubnetCidrBlockProperties {
    Ipv6CidrBlock: Value<string>
    SubnetId: Value<string>
}

export default class SubnetCidrBlock extends ResourceBase {
    constructor(properties: SubnetCidrBlockProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::SubnetCidrBlock', properties, dependsOn)
    }
}
