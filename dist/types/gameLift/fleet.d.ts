import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface IpPermissionProperties {
    FromPort: Value<number>;
    IpRange: Value<string>;
    Protocol: Value<string>;
    ToPort: Value<number>;
}
export declare class IpPermission extends ResourceBase {
    constructor(properties: IpPermissionProperties, dependsOn?: Value<string>);
}
export interface FleetProperties {
    BuildId: Value<string>;
    Description?: Value<string>;
    DesiredEC2Instances: Value<number>;
    EC2InboundPermissions?: IpPermission[];
    EC2InstanceType: Value<string>;
    LogPaths?: Value<string>[];
    MaxSize?: Value<number>;
    MinSize?: Value<number>;
    Name: Value<string>;
    ServerLaunchParameters?: Value<string>;
    ServerLaunchPath: Value<string>;
}
export default class Fleet extends ResourceBase {
    constructor(properties: FleetProperties, dependsOn?: Value<string>);
}
