import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PredicateProperties {
    Type: Value<string>;
    DataId: Value<string>;
    Negated: Value<boolean>;
}
export declare class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string>);
}
export interface RuleProperties {
    MetricName: Value<string>;
    Predicates?: Predicate[];
    Name: Value<string>;
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>);
}
