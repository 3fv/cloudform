import {ResourceBase} from '../resource'
import {Value} from '../internal'
import FileSystemTag from './fileSystemTag'

export type PerformanceMode = "*" | "generalPurpose" | "maxIO"

export interface FileSystemProperties {
    PerformanceMode?: Value<PerformanceMode>
    FileSystemTags?: FileSystemTag[]
}

export default class FileSystem extends ResourceBase {
    constructor(properties: FileSystemProperties, dependsOn?: Value<string>) {
        super('AWS::EFS::FileSystem', properties, dependsOn)
    }
}