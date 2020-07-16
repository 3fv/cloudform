/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ImageTestsConfiguration {
    ImageTestsEnabled?: Value<boolean>
    TimeoutMinutes?: Value<number>

    constructor(properties: ImageTestsConfiguration) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression?: Value<string>
    PipelineExecutionStartCondition?: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export interface ImagePipelineProperties {
    Name: Value<string>
    Description?: Value<string>
    ImageTestsConfiguration?: ImageTestsConfiguration
    Status?: Value<string>
    Schedule?: Schedule
    ImageRecipeArn: Value<string>
    DistributionConfigurationArn?: Value<string>
    InfrastructureConfigurationArn: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class ImagePipeline extends ResourceBase<ImagePipelineProperties> {
    static ImageTestsConfiguration = ImageTestsConfiguration
    static Schedule = Schedule

    constructor(properties: ImagePipelineProperties) {
        super('AWS::ImageBuilder::ImagePipeline', properties)
    }
}