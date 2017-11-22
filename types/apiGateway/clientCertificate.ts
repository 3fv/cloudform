/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface ClientCertificateProperties {
    Description?: Value<string>
}

export default class ClientCertificate extends ResourceBase {
    constructor(properties: ClientCertificateProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::ClientCertificate', properties, dependsOn)
    }
}