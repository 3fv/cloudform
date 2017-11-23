/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ApplicationProperties {
    ApplicationName?: Value<string>
}

export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::Application', properties, dependsOn)
    }
}