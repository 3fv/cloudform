/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   

import ElasticBeanstalk_ from './elasticBeanstalk'
export const ElasticBeanstalk = ElasticBeanstalk_

import ElasticBeanstalkConfigurationTemplate from './elasticBeanstalk/configurationTemplate'
import ElasticBeanstalkApplication from './elasticBeanstalk/application'
import ElasticBeanstalkEnvironment from './elasticBeanstalk/environment'
import ElasticBeanstalkApplicationVersion from './elasticBeanstalk/applicationVersion'

import EC2_ from './ec2'
export const EC2 = EC2_

import EC2RouteTable from './ec2/routeTable'
import EC2VPCPeeringConnection from './ec2/vpcPeeringConnection'
import EC2PlacementGroup from './ec2/placementGroup'
import EC2NetworkAclEntry from './ec2/networkAclEntry'
import EC2InternetGateway from './ec2/internetGateway'
import EC2Volume from './ec2/volume'
import EC2SpotFleet from './ec2/spotFleet'
import EC2VPNConnectionRoute from './ec2/vpnConnectionRoute'
import EC2NetworkInterfacePermission from './ec2/networkInterfacePermission'
import EC2EIP from './ec2/eip'
import EC2SecurityGroupIngress from './ec2/securityGroupIngress'
import EC2SubnetRouteTableAssociation from './ec2/subnetRouteTableAssociation'
import EC2Route from './ec2/route'
import EC2FlowLog from './ec2/flowLog'
import EC2SecurityGroupEgress from './ec2/securityGroupEgress'
import EC2NetworkInterface from './ec2/networkInterface'
import EC2SubnetNetworkAclAssociation from './ec2/subnetNetworkAclAssociation'
import EC2SubnetCidrBlock from './ec2/subnetCidrBlock'
import EC2NatGateway from './ec2/natGateway'
import EC2SecurityGroup from './ec2/securityGroup'
import EC2Subnet from './ec2/subnet'
import EC2VPC from './ec2/vpc'
import EC2Instance from './ec2/instance'
import EC2DHCPOptions from './ec2/dhcpOptions'
import EC2NetworkAcl from './ec2/networkAcl'
import EC2VPNGatewayRoutePropagation from './ec2/vpnGatewayRoutePropagation'
import EC2EgressOnlyInternetGateway from './ec2/egressOnlyInternetGateway'
import EC2NetworkInterfaceAttachment from './ec2/networkInterfaceAttachment'
import EC2CustomerGateway from './ec2/customerGateway'
import EC2TrunkInterfaceAssociation from './ec2/trunkInterfaceAssociation'
import EC2VolumeAttachment from './ec2/volumeAttachment'
import EC2Host from './ec2/host'
import EC2EIPAssociation from './ec2/eipAssociation'
import EC2VPNGateway from './ec2/vpnGateway'
import EC2VPCEndpoint from './ec2/vpcEndpoint'
import EC2VPCGatewayAttachment from './ec2/vpcGatewayAttachment'
import EC2VPNConnection from './ec2/vpnConnection'
import EC2VPCCidrBlock from './ec2/vpcCidrBlock'
import EC2VPCDHCPOptionsAssociation from './ec2/vpcdhcpOptionsAssociation'

import Cognito_ from './cognito'
export const Cognito = Cognito_

import CognitoIdentityPoolRoleAttachment from './cognito/identityPoolRoleAttachment'
import CognitoUserPoolGroup from './cognito/userPoolGroup'
import CognitoIdentityPool from './cognito/identityPool'
import CognitoUserPoolUser from './cognito/userPoolUser'
import CognitoUserPool from './cognito/userPool'
import CognitoUserPoolClient from './cognito/userPoolClient'
import CognitoUserPoolUserToGroupAttachment from './cognito/userPoolUserToGroupAttachment'

import Events_ from './events'
export const Events = Events_

import EventsRule from './events/rule'

import WAF_ from './waf'
export const WAF = WAF_

import WAFIPSet from './waf/ipSet'
import WAFSizeConstraintSet from './waf/sizeConstraintSet'
import WAFRule from './waf/rule'
import WAFByteMatchSet from './waf/byteMatchSet'
import WAFSqlInjectionMatchSet from './waf/sqlInjectionMatchSet'
import WAFWebACL from './waf/webAcl'
import WAFXssMatchSet from './waf/xssMatchSet'

import IAM_ from './iam'
export const IAM = IAM_

import IAMGroup from './iam/group'
import IAMPolicy from './iam/policy'
import IAMRole from './iam/role'
import IAMUserToGroupAddition from './iam/userToGroupAddition'
import IAMInstanceProfile from './iam/instanceProfile'
import IAMAccessKey from './iam/accessKey'
import IAMUser from './iam/user'
import IAMManagedPolicy from './iam/managedPolicy'

import CodePipeline_ from './codePipeline'
export const CodePipeline = CodePipeline_

import CodePipelineCustomActionType from './codePipeline/customActionType'
import CodePipelinePipeline from './codePipeline/pipeline'

import Elasticsearch_ from './elasticsearch'
export const Elasticsearch = Elasticsearch_

import ElasticsearchDomain from './elasticsearch/domain'

import WAFRegional_ from './wafRegional'
export const WAFRegional = WAFRegional_

import WAFRegionalSizeConstraintSet from './wafRegional/sizeConstraintSet'
import WAFRegionalSqlInjectionMatchSet from './wafRegional/sqlInjectionMatchSet'
import WAFRegionalXssMatchSet from './wafRegional/xssMatchSet'
import WAFRegionalByteMatchSet from './wafRegional/byteMatchSet'
import WAFRegionalWebACLAssociation from './wafRegional/webAclAssociation'
import WAFRegionalWebACL from './wafRegional/webAcl'
import WAFRegionalRule from './wafRegional/rule'
import WAFRegionalIPSet from './wafRegional/ipSet'

import ApiGateway_ from './apiGateway'
export const ApiGateway = ApiGateway_

import ApiGatewayRequestValidator from './apiGateway/requestValidator'
import ApiGatewayDeployment from './apiGateway/deployment'
import ApiGatewayAuthorizer from './apiGateway/authorizer'
import ApiGatewayDomainName from './apiGateway/domainName'
import ApiGatewayDocumentationPart from './apiGateway/documentationPart'
import ApiGatewayApiKey from './apiGateway/apiKey'
import ApiGatewayModel from './apiGateway/model'
import ApiGatewayResource from './apiGateway/resource'
import ApiGatewayAccount from './apiGateway/account'
import ApiGatewayRestApi from './apiGateway/restApi'
import ApiGatewayUsagePlan from './apiGateway/usagePlan'
import ApiGatewayBasePathMapping from './apiGateway/basePathMapping'
import ApiGatewayStage from './apiGateway/stage'
import ApiGatewayGatewayResponse from './apiGateway/gatewayResponse'
import ApiGatewayClientCertificate from './apiGateway/clientCertificate'
import ApiGatewayMethod from './apiGateway/method'
import ApiGatewayDocumentationVersion from './apiGateway/documentationVersion'
import ApiGatewayUsagePlanKey from './apiGateway/usagePlanKey'

import RDS_ from './rds'
export const RDS = RDS_

import RDSDBSecurityGroupIngress from './rds/dbSecurityGroupIngress'
import RDSDBCluster from './rds/dbCluster'
import RDSDBSubnetGroup from './rds/dbSubnetGroup'
import RDSOptionGroup from './rds/optionGroup'
import RDSDBParameterGroup from './rds/dbParameterGroup'
import RDSEventSubscription from './rds/eventSubscription'
import RDSDBInstance from './rds/dbInstance'
import RDSDBSecurityGroup from './rds/dbSecurityGroup'
import RDSDBClusterParameterGroup from './rds/dbClusterParameterGroup'

import WorkSpaces_ from './workSpaces'
export const WorkSpaces = WorkSpaces_

import WorkSpacesWorkspace from './workSpaces/workspace'

import EMR_ from './emr'
export const EMR = EMR_

import EMRInstanceFleetConfig from './emr/instanceFleetConfig'
import EMRCluster from './emr/cluster'
import EMRInstanceGroupConfig from './emr/instanceGroupConfig'
import EMRStep from './emr/step'
import EMRSecurityConfiguration from './emr/securityConfiguration'

import Logs_ from './logs'
export const Logs = Logs_

import LogsLogGroup from './logs/logGroup'
import LogsMetricFilter from './logs/metricFilter'
import LogsLogStream from './logs/logStream'
import LogsSubscriptionFilter from './logs/subscriptionFilter'
import LogsDestination from './logs/destination'

import Kinesis_ from './kinesis'
export const Kinesis = Kinesis_

import KinesisStream from './kinesis/stream'

import AutoScaling_ from './autoScaling'
export const AutoScaling = AutoScaling_

import AutoScalingLaunchConfiguration from './autoScaling/launchConfiguration'
import AutoScalingLifecycleHook from './autoScaling/lifecycleHook'
import AutoScalingScalingPolicy from './autoScaling/scalingPolicy'
import AutoScalingAutoScalingGroup from './autoScaling/autoScalingGroup'
import AutoScalingScheduledAction from './autoScaling/scheduledAction'

import SQS_ from './sqs'
export const SQS = SQS_

import SQSQueue from './sqs/queue'
import SQSQueuePolicy from './sqs/queuePolicy'

import Route53_ from './route53'
export const Route53 = Route53_

import Route53RecordSet from './route53/recordSet'
import Route53HostedZone from './route53/hostedZone'
import Route53RecordSetGroup from './route53/recordSetGroup'
import Route53HealthCheck from './route53/healthCheck'

import CloudWatch_ from './cloudWatch'
export const CloudWatch = CloudWatch_

import CloudWatchDashboard from './cloudWatch/dashboard'
import CloudWatchAlarm from './cloudWatch/alarm'

import ECS_ from './ecs'
export const ECS = ECS_

import ECSCluster from './ecs/cluster'
import ECSService from './ecs/service'
import ECSTaskDefinition from './ecs/taskDefinition'

import ElasticLoadBalancingV2_ from './elasticLoadBalancingV2'
export const ElasticLoadBalancingV2 = ElasticLoadBalancingV2_

import ElasticLoadBalancingV2ListenerCertificate from './elasticLoadBalancingV2/listenerCertificate'
import ElasticLoadBalancingV2LoadBalancer from './elasticLoadBalancingV2/loadBalancer'
import ElasticLoadBalancingV2Listener from './elasticLoadBalancingV2/listener'
import ElasticLoadBalancingV2ListenerRule from './elasticLoadBalancingV2/listenerRule'
import ElasticLoadBalancingV2TargetGroup from './elasticLoadBalancingV2/targetGroup'

import StepFunctions_ from './stepFunctions'
export const StepFunctions = StepFunctions_

import StepFunctionsActivity from './stepFunctions/activity'
import StepFunctionsStateMachine from './stepFunctions/stateMachine'

import KinesisAnalytics_ from './kinesisAnalytics'
export const KinesisAnalytics = KinesisAnalytics_

import KinesisAnalyticsApplicationOutput from './kinesisAnalytics/applicationOutput'
import KinesisAnalyticsApplicationReferenceDataSource from './kinesisAnalytics/applicationReferenceDataSource'
import KinesisAnalyticsApplication from './kinesisAnalytics/application'

import OpsWorks_ from './opsWorks'
export const OpsWorks = OpsWorks_

import OpsWorksVolume from './opsWorks/volume'
import OpsWorksApp from './opsWorks/app'
import OpsWorksLayer from './opsWorks/layer'
import OpsWorksStack from './opsWorks/stack'
import OpsWorksElasticLoadBalancerAttachment from './opsWorks/elasticLoadBalancerAttachment'
import OpsWorksInstance from './opsWorks/instance'
import OpsWorksUserProfile from './opsWorks/userProfile'

import CloudFront_ from './cloudFront'
export const CloudFront = CloudFront_

import CloudFrontStreamingDistribution from './cloudFront/streamingDistribution'
import CloudFrontDistribution from './cloudFront/distribution'
import CloudFrontCloudFrontOriginAccessIdentity from './cloudFront/cloudFrontOriginAccessIdentity'

import GameLift_ from './gameLift'
export const GameLift = GameLift_

import GameLiftAlias from './gameLift/alias'
import GameLiftBuild from './gameLift/build'
import GameLiftFleet from './gameLift/fleet'

import DirectoryService_ from './directoryService'
export const DirectoryService = DirectoryService_

import DirectoryServiceMicrosoftAD from './directoryService/microsoftAd'
import DirectoryServiceSimpleAD from './directoryService/simpleAd'

import SNS_ from './sns'
export const SNS = SNS_

import SNSSubscription from './sns/subscription'
import SNSTopic from './sns/topic'
import SNSTopicPolicy from './sns/topicPolicy'

import EFS_ from './efs'
export const EFS = EFS_

import EFSMountTarget from './efs/mountTarget'
import EFSFileSystem from './efs/fileSystem'

import SSM_ from './ssm'
export const SSM = SSM_

import SSMDocument from './ssm/document'
import SSMPatchBaseline from './ssm/patchBaseline'
import SSMParameter from './ssm/parameter'
import SSMAssociation from './ssm/association'
import SSMMaintenanceWindowTask from './ssm/maintenanceWindowTask'

import Config_ from './config'
export const Config = Config_

import ConfigDeliveryChannel from './config/deliveryChannel'
import ConfigConfigurationRecorder from './config/configurationRecorder'
import ConfigConfigRule from './config/configRule'

import KMS_ from './kms'
export const KMS = KMS_

import KMSKey from './kms/key'
import KMSAlias from './kms/alias'

import Redshift_ from './redshift'
export const Redshift = Redshift_

import RedshiftCluster from './redshift/cluster'
import RedshiftClusterParameterGroup from './redshift/clusterParameterGroup'
import RedshiftClusterSecurityGroupIngress from './redshift/clusterSecurityGroupIngress'
import RedshiftClusterSubnetGroup from './redshift/clusterSubnetGroup'
import RedshiftClusterSecurityGroup from './redshift/clusterSecurityGroup'

import Lambda_ from './lambda'
export const Lambda = Lambda_

import LambdaEventSourceMapping from './lambda/eventSourceMapping'
import LambdaAlias from './lambda/alias'
import LambdaFunction from './lambda/function'
import LambdaVersion from './lambda/version'
import LambdaPermission from './lambda/permission'

import CertificateManager_ from './certificateManager'
export const CertificateManager = CertificateManager_

import CertificateManagerCertificate from './certificateManager/certificate'

import Batch_ from './batch'
export const Batch = Batch_

import BatchJobDefinition from './batch/jobDefinition'
import BatchJobQueue from './batch/jobQueue'
import BatchComputeEnvironment from './batch/computeEnvironment'

import ElasticLoadBalancing_ from './elasticLoadBalancing'
export const ElasticLoadBalancing = ElasticLoadBalancing_

import ElasticLoadBalancingLoadBalancer from './elasticLoadBalancing/loadBalancer'

import IoT_ from './iot'
export const IoT = IoT_

import IoTThing from './iot/thing'
import IoTPolicy from './iot/policy'
import IoTTopicRule from './iot/topicRule'
import IoTPolicyPrincipalAttachment from './iot/policyPrincipalAttachment'
import IoTThingPrincipalAttachment from './iot/thingPrincipalAttachment'
import IoTCertificate from './iot/certificate'

import DMS_ from './dms'
export const DMS = DMS_

import DMSCertificate from './dms/certificate'
import DMSReplicationSubnetGroup from './dms/replicationSubnetGroup'
import DMSEventSubscription from './dms/eventSubscription'
import DMSEndpoint from './dms/endpoint'
import DMSReplicationTask from './dms/replicationTask'
import DMSReplicationInstance from './dms/replicationInstance'

import ElastiCache_ from './elastiCache'
export const ElastiCache = ElastiCache_

import ElastiCacheSecurityGroup from './elastiCache/securityGroup'
import ElastiCacheSubnetGroup from './elastiCache/subnetGroup'
import ElastiCacheSecurityGroupIngress from './elastiCache/securityGroupIngress'
import ElastiCacheReplicationGroup from './elastiCache/replicationGroup'
import ElastiCacheParameterGroup from './elastiCache/parameterGroup'
import ElastiCacheCacheCluster from './elastiCache/cacheCluster'

import CodeDeploy_ from './codeDeploy'
export const CodeDeploy = CodeDeploy_

import CodeDeployDeploymentGroup from './codeDeploy/deploymentGroup'
import CodeDeployDeploymentConfig from './codeDeploy/deploymentConfig'
import CodeDeployApplication from './codeDeploy/application'

import GuardDuty_ from './guardDuty'
export const GuardDuty = GuardDuty_

import GuardDutyThreatIntelSet from './guardDuty/threatIntelSet'
import GuardDutyDetector from './guardDuty/detector'
import GuardDutyIPSet from './guardDuty/ipSet'

import CodeBuild_ from './codeBuild'
export const CodeBuild = CodeBuild_

import CodeBuildProject from './codeBuild/project'

import DAX_ from './dax'
export const DAX = DAX_

import DAXSubnetGroup from './dax/subnetGroup'
import DAXParameterGroup from './dax/parameterGroup'
import DAXCluster from './dax/cluster'

import DataPipeline_ from './dataPipeline'
export const DataPipeline = DataPipeline_

import DataPipelinePipeline from './dataPipeline/pipeline'

import CloudTrail_ from './cloudTrail'
export const CloudTrail = CloudTrail_

import CloudTrailTrail from './cloudTrail/trail'

import CloudFormation_ from './cloudFormation'
export const CloudFormation = CloudFormation_

import CloudFormationWaitCondition from './cloudFormation/waitCondition'
import CloudFormationStack from './cloudFormation/stack'
import CloudFormationWaitConditionHandle from './cloudFormation/waitConditionHandle'
import CloudFormationCustomResource from './cloudFormation/customResource'

import ApplicationAutoScaling_ from './applicationAutoScaling'
export const ApplicationAutoScaling = ApplicationAutoScaling_

import ApplicationAutoScalingScalingPolicy from './applicationAutoScaling/scalingPolicy'
import ApplicationAutoScalingScalableTarget from './applicationAutoScaling/scalableTarget'

import CodeCommit_ from './codeCommit'
export const CodeCommit = CodeCommit_

import CodeCommitRepository from './codeCommit/repository'

import S3_ from './s3'
export const S3 = S3_

import S3Bucket from './s3/bucket'
import S3BucketPolicy from './s3/bucketPolicy'

import KinesisFirehose_ from './kinesisFirehose'
export const KinesisFirehose = KinesisFirehose_

import KinesisFirehoseDeliveryStream from './kinesisFirehose/deliveryStream'

import SDB_ from './sdb'
export const SDB = SDB_

import SDBDomain from './sdb/domain'

import ECR_ from './ecr'
export const ECR = ECR_

import ECRRepository from './ecr/repository'

import DynamoDB_ from './dynamoDb'
export const DynamoDB = DynamoDB_

import DynamoDBTable from './dynamoDb/table'

import Athena_ from './athena'
export const Athena = Athena_

import AthenaNamedQuery from './athena/namedQuery' 

export default {
  ElasticBeanstalk,
  EC2,
  Cognito,
  Events,
  WAF,
  IAM,
  CodePipeline,
  Elasticsearch,
  WAFRegional,
  ApiGateway,
  RDS,
  WorkSpaces,
  EMR,
  Logs,
  Kinesis,
  AutoScaling,
  SQS,
  Route53,
  CloudWatch,
  ECS,
  ElasticLoadBalancingV2,
  StepFunctions,
  KinesisAnalytics,
  OpsWorks,
  CloudFront,
  GameLift,
  DirectoryService,
  SNS,
  EFS,
  SSM,
  Config,
  KMS,
  Redshift,
  Lambda,
  CertificateManager,
  Batch,
  ElasticLoadBalancing,
  IoT,
  DMS,
  ElastiCache,
  CodeDeploy,
  GuardDuty,
  CodeBuild,
  DAX,
  DataPipeline,
  CloudTrail,
  CloudFormation,
  ApplicationAutoScaling,
  CodeCommit,
  S3,
  KinesisFirehose,
  SDB,
  ECR,
  DynamoDB,
  Athena
}
