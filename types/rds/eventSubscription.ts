import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type SourceType = "db-instance" | "*"

export interface EventSubscriptionProperties {
    Enabled?: Value<boolean>
    EventCategories?: Value<string>[]
    SnsTopicArn: Value<string>
    SourceIds?: Value<string>[]
    SourceType?: Value<SourceType>
}

export default class EventSubscription extends ResourceBase {
    constructor(properties: EventSubscriptionProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::EventSubscription', properties, dependsOn)
    }
}