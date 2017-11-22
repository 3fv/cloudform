/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'



export interface DBParameterGroupProperties {
    Description: Value<string>
    Family: Value<string>
    Parameters?: {[key: string]: Value<string>}
    Tags?: ResourceTag[]
}

export default class DBParameterGroup extends ResourceBase {
    constructor(properties: DBParameterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBParameterGroup', properties, dependsOn)
    }
}