"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourceBase {
    constructor(type, properties) {
        this.Type = type;
        this.Properties = properties;
    }
    dependsOn(dependencies) {
        this.DependsOn = dependencies;
        return this;
    }
    metadata(metadata) {
        this.Metadata = metadata;
        return this;
    }
    creationPolicy(policy) {
        this.CreationPolicy = policy;
        return this;
    }
    deletionPolicy(policy) {
        this.DeletionPolicy = policy;
        return this;
    }
    updatePolicy(policy) {
        this.UpdatePolicy = policy;
        return this;
    }
}
exports.ResourceBase = ResourceBase;
class ResourceTag {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}
exports.ResourceTag = ResourceTag;
