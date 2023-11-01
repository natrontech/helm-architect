// tslint:disable
/**
 * authentik
 * Making authentication simple.
 *
 * The version of the OpenAPI document: 2023.10.2
 * Contact: hello@goauthentik.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Tenant Serializer
 * @export
 * @interface PatchedTenantRequest
 */
export interface PatchedTenantRequest {
    /**
     * Domain that activates this tenant. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b`
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    domain?: string;
    /**
     * @type {boolean}
     * @memberof PatchedTenantRequest
     */
    _default?: boolean;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    branding_title?: string;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    branding_logo?: string;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    branding_favicon?: string;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_authentication?: string | null;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_invalidation?: string | null;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_recovery?: string | null;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_unenrollment?: string | null;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_user_settings?: string | null;
    /**
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    flow_device_code?: string | null;
    /**
     * Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2).
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    event_retention?: string;
    /**
     * Web Certificate used by the authentik Core webserver.
     * @type {string}
     * @memberof PatchedTenantRequest
     */
    web_certificate?: string | null;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof PatchedTenantRequest
     */
    attributes?: { [key: string]: any; };
}