/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class OptionSetting {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: OptionSetting) {
        Object.assign(this, properties)
    }
}

export class OptionConfiguration {
    DBSecurityGroupMemberships?: List<Value<string>>
    OptionName: Value<string>
    OptionSettings?: OptionSetting
    OptionVersion?: Value<string>
    Port?: Value<number>
    VpcSecurityGroupMemberships?: List<Value<string>>

    constructor(properties: OptionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface OptionGroupProperties {
    EngineName: Value<string>
    MajorEngineVersion: Value<string>
    OptionConfigurations: List<OptionConfiguration>
    OptionGroupDescription: Value<string>
    Tags?: ResourceTag[]
}

export default class OptionGroup extends ResourceBase {
    constructor(properties: OptionGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::RDS::OptionGroup', properties, dependsOn)
    }
}
