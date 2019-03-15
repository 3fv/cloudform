/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Subscription {
    Target!: Value<string>
    Id!: Value<string>
    Source!: Value<string>
    Subject!: Value<string>

    constructor(properties: Subscription) {
        Object.assign(this, properties)
    }
}

export class SubscriptionDefinitionVersion {
    Subscriptions!: List<Subscription>

    constructor(properties: SubscriptionDefinitionVersion) {
        Object.assign(this, properties)
    }
}

export interface SubscriptionDefinitionProperties {
    InitialVersion?: SubscriptionDefinitionVersion
    Name: Value<string>
}

export default class SubscriptionDefinition extends ResourceBase<SubscriptionDefinitionProperties> {
    static Subscription = Subscription
    static SubscriptionDefinitionVersion = SubscriptionDefinitionVersion

    constructor(properties: SubscriptionDefinitionProperties) {
        super('AWS::Greengrass::SubscriptionDefinition', properties)
    }
}
