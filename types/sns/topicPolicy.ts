/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface TopicPolicyProperties {
    PolicyDocument: any
    Topics: Value<string>[]
}

export default class TopicPolicy extends ResourceBase {
    constructor(properties: TopicPolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::SNS::TopicPolicy', properties, dependsOn)
    }
}
