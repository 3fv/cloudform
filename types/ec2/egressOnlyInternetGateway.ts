/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface EgressOnlyInternetGatewayProperties {
    VpcId: Value<string>
}

export default class EgressOnlyInternetGateway extends ResourceBase {


    constructor(properties?: EgressOnlyInternetGatewayProperties) {
        super('AWS::EC2::EgressOnlyInternetGateway', properties)
    }
}
