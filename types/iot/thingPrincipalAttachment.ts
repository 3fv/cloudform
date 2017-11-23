/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ThingPrincipalAttachmentProperties {
    Principal: Value<string>
    ThingName: Value<string>
}

export default class ThingPrincipalAttachment extends ResourceBase {
    constructor(properties: ThingPrincipalAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::ThingPrincipalAttachment', properties, dependsOn)
    }
}