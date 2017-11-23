/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ConfigSnapshotDeliveryProperties {
    DeliveryFrequency?: Value<string>

    constructor(properties: ConfigSnapshotDeliveryProperties) {
        Object.assign(this, properties)
    }
}

export interface DeliveryChannelProperties {
    ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties
    Name?: Value<string>
    S3BucketName: Value<string>
    S3KeyPrefix?: Value<string>
    SnsTopicARN?: Value<string>
}

export default class DeliveryChannel extends ResourceBase {
    constructor(properties: DeliveryChannelProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Config::DeliveryChannel', properties, dependsOn)
    }
}
