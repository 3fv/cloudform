import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CookiesProperties {
    WhitelistedNames?: List<Value<string>>;
    Forward: Value<string>;
}
export declare class Cookies extends ResourceBase {
    constructor(properties: CookiesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LambdaFunctionAssociationProperties {
    EventType?: Value<string>;
    LambdaFunctionARN?: Value<string>;
}
export declare class LambdaFunctionAssociation extends ResourceBase {
    constructor(properties: LambdaFunctionAssociationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CustomOriginConfigProperties {
    OriginReadTimeout?: Value<number>;
    HTTPSPort?: Value<number>;
    OriginKeepaliveTimeout?: Value<number>;
    OriginSSLProtocols?: List<Value<string>>;
    HTTPPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
}
export declare class CustomOriginConfig extends ResourceBase {
    constructor(properties: CustomOriginConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ForwardedValuesProperties {
    Cookies?: Cookies;
    Headers?: List<Value<string>>;
    QueryString: Value<boolean>;
    QueryStringCacheKeys?: List<Value<string>>;
}
export declare class ForwardedValues extends ResourceBase {
    constructor(properties: ForwardedValuesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CacheBehaviorProperties {
    Compress?: Value<boolean>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
    AllowedMethods?: List<Value<string>>;
    PathPattern: Value<string>;
    CachedMethods?: List<Value<string>>;
    SmoothStreaming?: Value<boolean>;
    ForwardedValues: ForwardedValues;
    MinTTL?: Value<number>;
    MaxTTL?: Value<number>;
}
export declare class CacheBehavior extends ResourceBase {
    constructor(properties: CacheBehaviorProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LegacyCustomOriginProperties {
    HTTPSPort?: Value<number>;
    OriginSSLProtocols?: List<Value<string>>;
    DNSName: Value<string>;
    HTTPPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
}
export declare class LegacyCustomOrigin extends ResourceBase {
    constructor(properties: LegacyCustomOriginProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DefaultCacheBehaviorProperties {
    Compress?: Value<boolean>;
    AllowedMethods?: List<Value<string>>;
    CachedMethods?: List<Value<string>>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    SmoothStreaming?: Value<boolean>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    ForwardedValues: ForwardedValues;
    MinTTL?: Value<number>;
    MaxTTL?: Value<number>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
}
export declare class DefaultCacheBehavior extends ResourceBase {
    constructor(properties: DefaultCacheBehaviorProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RestrictionsProperties {
    GeoRestriction: GeoRestriction;
}
export declare class Restrictions extends ResourceBase {
    constructor(properties: RestrictionsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface OriginProperties {
    OriginCustomHeaders?: List<OriginCustomHeader>;
    DomainName: Value<string>;
    S3OriginConfig?: S3OriginConfig;
    OriginPath?: Value<string>;
    Id: Value<string>;
    CustomOriginConfig?: CustomOriginConfig;
}
export declare class Origin extends ResourceBase {
    constructor(properties: OriginProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface GeoRestrictionProperties {
    Locations?: List<Value<string>>;
    RestrictionType: Value<string>;
}
export declare class GeoRestriction extends ResourceBase {
    constructor(properties: GeoRestrictionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ViewerCertificateProperties {
    IamCertificateId?: Value<string>;
    SslSupportMethod?: Value<string>;
    MinimumProtocolVersion?: Value<string>;
    CloudFrontDefaultCertificate?: Value<boolean>;
    AcmCertificateArn?: Value<string>;
}
export declare class ViewerCertificate extends ResourceBase {
    constructor(properties: ViewerCertificateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface S3OriginConfigProperties {
    OriginAccessIdentity?: Value<string>;
}
export declare class S3OriginConfig extends ResourceBase {
    constructor(properties: S3OriginConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CustomErrorResponseProperties {
    ResponseCode?: Value<number>;
    ErrorCachingMinTTL?: Value<number>;
    ErrorCode: Value<number>;
    ResponsePagePath?: Value<string>;
}
export declare class CustomErrorResponse extends ResourceBase {
    constructor(properties: CustomErrorResponseProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LoggingProperties {
    IncludeCookies?: Value<boolean>;
    Bucket: Value<string>;
    Prefix?: Value<string>;
}
export declare class Logging extends ResourceBase {
    constructor(properties: LoggingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DistributionConfigProperties {
    Logging?: Logging;
    Comment?: Value<string>;
    DefaultRootObject?: Value<string>;
    Origins?: List<Origin>;
    ViewerCertificate?: ViewerCertificate;
    PriceClass?: Value<string>;
    S3Origin?: LegacyS3Origin;
    CustomOrigin?: LegacyCustomOrigin;
    DefaultCacheBehavior?: DefaultCacheBehavior;
    CustomErrorResponses?: List<CustomErrorResponse>;
    Enabled: Value<boolean>;
    Aliases?: List<Value<string>>;
    IPV6Enabled?: Value<boolean>;
    WebACLId?: Value<string>;
    CNAMEs?: List<Value<string>>;
    HttpVersion?: Value<string>;
    Restrictions?: Restrictions;
    CacheBehaviors?: List<CacheBehavior>;
}
export declare class DistributionConfig extends ResourceBase {
    constructor(properties: DistributionConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LegacyS3OriginProperties {
    OriginAccessIdentity?: Value<string>;
    DNSName: Value<string>;
}
export declare class LegacyS3Origin extends ResourceBase {
    constructor(properties: LegacyS3OriginProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface OriginCustomHeaderProperties {
    HeaderValue: Value<string>;
    HeaderName: Value<string>;
}
export declare class OriginCustomHeader extends ResourceBase {
    constructor(properties: OriginCustomHeaderProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DistributionProperties {
    DistributionConfig: DistributionConfig;
    Tags?: ResourceTag[];
}
export default class Distribution extends ResourceBase {
    constructor(properties: DistributionProperties, dependsOn?: Value<string> | Value<string>[]);
}
