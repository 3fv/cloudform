/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Repository {
    PathComponent: Value<string>
    RepositoryUrl: Value<string>

    constructor(properties: Repository) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentEC2Properties {
    Repositories?: List<Repository>
    OwnerArn?: Value<string>
    Description?: Value<string>
    AutomaticStopTimeMinutes?: Value<number>
    SubnetId?: Value<string>
    InstanceType: Value<string>
    Name?: Value<string>
}

export default class EnvironmentEC2 extends ResourceBase {
    constructor(properties?: EnvironmentEC2Properties) {
        super('AWS::Cloud9::EnvironmentEC2', properties)
    }
}
