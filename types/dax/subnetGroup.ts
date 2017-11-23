/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SubnetGroupProperties {
    Description?: Value<string>
    SubnetGroupName?: Value<string>
    SubnetIds: Value<string>[]
}

export default class SubnetGroup extends ResourceBase {
    constructor(properties: SubnetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::DAX::SubnetGroup', properties, dependsOn)
    }
}