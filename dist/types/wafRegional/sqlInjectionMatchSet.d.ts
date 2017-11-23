import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface FieldToMatchProperties {
    Type: Value<string>;
    Data?: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SqlInjectionMatchTupleProperties {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
}
export declare class SqlInjectionMatchTuple extends ResourceBase {
    constructor(properties: SqlInjectionMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SqlInjectionMatchSetProperties {
    SqlInjectionMatchTuples?: List<SqlInjectionMatchTuple>;
    Name: Value<string>;
}
export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
