/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface DBClusterProperties {
    AvailabilityZones?: Value<string>[]
    BackupRetentionPeriod?: Value<number>
    DBClusterParameterGroupName?: Value<string>
    DBSubnetGroupName?: Value<string>
    DatabaseName?: Value<string>
    Engine: Value<string>
    EngineVersion?: Value<string>
    KmsKeyId?: Value<string>
    MasterUserPassword?: Value<string>
    MasterUsername?: Value<string>
    Port?: Value<number>
    PreferredBackupWindow?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    ReplicationSourceIdentifier?: Value<string>
    SnapshotIdentifier?: Value<string>
    StorageEncrypted?: Value<boolean>
    Tags?: ResourceTag[]
    VpcSecurityGroupIds?: Value<string>[]
}

export default class DBCluster extends ResourceBase {
    constructor(properties: DBClusterProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::DBCluster', properties, dependsOn)
    }
}