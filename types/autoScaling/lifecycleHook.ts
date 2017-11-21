import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LifecycleHookProperties {
    AutoScalingGroupName: Value<string>
    DefaultResult?: Value<string>
    HeartbeatTimeout?: Value<number>
    LifecycleHookName?: Value<string>
    LifecycleTransition: Value<string>
    NotificationMetadata?: Value<string>
    NotificationTargetARN: Value<string>
    RoleARN: Value<string>
}

export default class LifecycleHook extends ResourceBase {
    constructor(properties: LifecycleHookProperties, dependsOn?: Value<string>) {
        super('AWS::AutoScaling::LifecycleHook', properties, dependsOn)
    }
}