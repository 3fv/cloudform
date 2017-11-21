import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RouteProperties {
    DestinationCidrBlock: Value<string>
    DestinationIpv6CidrBlock?: Value<string>
    GatewayId?: Value<string>
    InstanceId?: Value<string>
    NatGatewayId?: Value<string>
    NetworkInterfaceId?: Value<string>
    RouteTableId: Value<string>
    VpcPeeringConnectionId?: Value<string>
}

export default class Route extends ResourceBase {
    constructor(properties: RouteProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Route', properties, dependsOn)
    }
}