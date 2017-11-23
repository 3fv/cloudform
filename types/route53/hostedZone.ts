/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class HostedZoneTag {
    Key: Value<string>
    Value: Value<string>

    constructor(properties: HostedZoneTag) {
        Object.assign(this, properties)
    }
}

export class HostedZoneConfig {
    Comment?: Value<string>

    constructor(properties: HostedZoneConfig) {
        Object.assign(this, properties)
    }
}

export class QueryLoggingConfig {
    CloudWatchLogsLogGroupArn: Value<string>

    constructor(properties: QueryLoggingConfig) {
        Object.assign(this, properties)
    }
}

export class VPC {
    VPCId: Value<string>
    VPCRegion: Value<string>

    constructor(properties: VPC) {
        Object.assign(this, properties)
    }
}

export interface HostedZoneProperties {
    HostedZoneConfig?: HostedZoneConfig
    HostedZoneTags?: List<HostedZoneTag>
    Name: Value<string>
    QueryLoggingConfig?: QueryLoggingConfig
    VPCs?: List<VPC>
}

export default class HostedZone extends ResourceBase {
    constructor(properties: HostedZoneProperties) {
        super('AWS::Route53::HostedZone', properties)
    }
}
