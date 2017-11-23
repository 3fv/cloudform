/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class XssMatchTuple {
    TextTransformation: Value<string>
    FieldToMatch: FieldToMatch

    constructor(properties: XssMatchTuple) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    Type: Value<string>
    Data?: Value<string>

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export interface XssMatchSetProperties {
    XssMatchTuples?: List<XssMatchTuple>
    Name: Value<string>
}

export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAFRegional::XssMatchSet', properties, dependsOn)
    }
}
