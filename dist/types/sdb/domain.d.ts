import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DomainProperties {
}
export default class Domain extends ResourceBase {
    constructor(properties: DomainProperties, dependsOn?: Value<string>);
}
