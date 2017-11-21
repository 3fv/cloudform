import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export declare type InstanceTenancy = "default" | "dedicated";
export interface VPCProperties {
    CidrBlock: Value<string>;
    EnableDnsSupport?: Value<boolean>;
    EnableDnsHostnames?: Value<boolean>;
    InstanceTenancy?: Value<InstanceTenancy>;
    Tags?: ResourceTag[];
}
export default class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string>);
}
