/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface EventSubscriptionProperties {
    Enabled?: Value<boolean>
    EventCategories?: Value<string>[]
    SnsTopicArn: Value<string>
    SourceIds?: Value<string>[]
    SourceType?: Value<string>
}

export default class EventSubscription extends ResourceBase {
    constructor(properties: EventSubscriptionProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::EventSubscription', properties, dependsOn)
    }
}
