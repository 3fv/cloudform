import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ResourceProperties {
    ParentId: Value<string>
    PathPart: Value<string>
    RestApiId: Value<string>
}

export default class Resource extends ResourceBase {
    constructor(properties: ResourceProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Resource', properties, dependsOn)
    }
}