import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrant extends Entity, Partial<Parsable> {
    /** The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API. Required. Supports $filter (eq only). */
    clientId?: string;
    /** Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only). */
    consentType?: string;
    /** Currently, the end time value is ignored, but a value is required when creating an oAuth2PermissionGrant. Required. */
    expiryTime?: Date;
    /** The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If consentType is AllPrincipals this value is null. Required when consentType is Principal. Supports $filter (eq only). */
    principalId?: string;
    /** The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user. Supports $filter (eq only). */
    resourceId?: string;
    /** A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of the resource service principal. Must not exceed 3850 characters in length. */
    scope?: string;
    /** Currently, the start time value is ignored, but a value is required when creating an oAuth2PermissionGrant. Required. */
    startTime?: Date;
}
