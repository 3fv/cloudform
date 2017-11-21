import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface StateMachineProperties {
    DefinitionString: Value<string>
    RoleArn: Value<string>
}

export default class StateMachine extends ResourceBase {
    constructor(properties: StateMachineProperties, dependsOn?: Value<string>) {
        super('AWS::StepFunctions::StateMachine', properties, dependsOn)
    }
}