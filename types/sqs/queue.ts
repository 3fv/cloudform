/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface QueueProperties {
    ContentBasedDeduplication?: Value<boolean>
    DelaySeconds?: Value<number>
    FifoQueue?: Value<boolean>
    KmsDataKeyReusePeriodSeconds?: Value<number>
    KmsMasterKeyId?: Value<string>
    MaximumMessageSize?: Value<number>
    MessageRetentionPeriod?: Value<number>
    QueueName?: Value<string>
    ReceiveMessageWaitTimeSeconds?: Value<number>
    RedrivePolicy?: any
    VisibilityTimeout?: Value<number>
}

export default class Queue extends ResourceBase {
    constructor(properties: QueueProperties, dependsOn?: Value<string>) {
        super('AWS::SQS::Queue', properties, dependsOn)
    }
}
