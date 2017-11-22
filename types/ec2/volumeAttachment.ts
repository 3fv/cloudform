/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface VolumeAttachmentProperties {
    Device: Value<string>
    InstanceId: Value<string>
    VolumeId: Value<string>
}

export default class VolumeAttachment extends ResourceBase {
    constructor(properties: VolumeAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::VolumeAttachment', properties, dependsOn)
    }
}