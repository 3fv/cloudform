/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributePayload {
    Attributes?: {[key: string]: Value<string>}

    constructor(properties: AttributePayload) {
        Object.assign(this, properties)
    }
}

export interface ThingProperties {
    AttributePayload?: AttributePayload
    ThingName?: Value<string>
}

export default class Thing extends ResourceBase {
    constructor(properties?: ThingProperties) {
        super('AWS::IoT::Thing', properties)
    }
}
