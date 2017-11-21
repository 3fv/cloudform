import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type KeyType = "API_KEY";
export interface UsagePlanKeyProperties {
    KeyId: Value<string>;
    KeyType: Value<KeyType>;
    UsagePlanId: Value<string>;
}
export default class UsagePlanKey extends ResourceBase {
    constructor(properties: UsagePlanKeyProperties, dependsOn?: Value<string>);
}
