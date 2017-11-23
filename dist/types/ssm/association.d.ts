import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Target {
    Key: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: Target);
}
export declare class ParameterValues {
    ParameterValues: List<Value<string>>;
    constructor(properties: ParameterValues);
}
export interface AssociationProperties {
    DocumentVersion?: Value<string>;
    InstanceId?: Value<string>;
    Name: Value<string>;
    Parameters?: {
        [key: string]: ParameterValues;
    };
    ScheduleExpression?: Value<string>;
    Targets?: List<Target>;
}
export default class Association extends ResourceBase {
    constructor(properties?: AssociationProperties);
}
