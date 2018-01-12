/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface VPCGatewayAttachmentProperties {
    InternetGatewayId?: Value<string>
    VpcId: Value<string>
    VpnGatewayId?: Value<string>
}

export default class VPCGatewayAttachment extends ResourceBase {
    constructor(properties?: VPCGatewayAttachmentProperties) {
        super('AWS::EC2::VPCGatewayAttachment', properties)
    }
}
