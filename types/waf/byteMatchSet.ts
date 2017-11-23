/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ByteMatchTuple {
    FieldToMatch: FieldToMatch
    PositionalConstraint: Value<string>
    TargetString?: Value<string>
    TargetStringBase64?: Value<string>
    TextTransformation: Value<string>

    constructor(properties: ByteMatchTuple) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    Data?: Value<string>
    Type: Value<string>

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export interface ByteMatchSetProperties {
    ByteMatchTuples?: List<ByteMatchTuple>
    Name: Value<string>
}

export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::WAF::ByteMatchSet', properties, dependsOn)
    }
}
