import {ResourceBase} from '../resource'
import {Value} from '../internal'
import KMSEncryptionConfig from './kmsEncryptionConfig'

export type NoEncryptionConfig = "*" | "NoEncryption"

export interface EncryptionConfigurationProperties {
    KMSEncryptionConfig?: KMSEncryptionConfig
    NoEncryptionConfig?: Value<NoEncryptionConfig>
}

export default class EncryptionConfiguration extends ResourceBase {
    constructor(properties: EncryptionConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisFirehose::EncryptionConfiguration', properties, dependsOn)
    }
}