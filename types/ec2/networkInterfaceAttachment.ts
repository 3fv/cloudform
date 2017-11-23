/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface NetworkInterfaceAttachmentProperties {
    DeleteOnTermination?: Value<boolean>
    DeviceIndex: Value<string>
    InstanceId: Value<string>
    NetworkInterfaceId: Value<string>
}

export default class NetworkInterfaceAttachment extends ResourceBase {
    constructor(properties: NetworkInterfaceAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterfaceAttachment', properties, dependsOn)
    }
}
