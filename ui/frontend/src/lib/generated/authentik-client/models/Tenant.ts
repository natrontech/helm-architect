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
 * @interface Tenant
 */
export interface Tenant {
    /**
     * @type {string}
     * @memberof Tenant
     */
    readonly tenant_uuid: string;
    /**
     * Domain that activates this tenant. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b`
     * @type {string}
     * @memberof Tenant
     */
    domain: string;
    /**
     * @type {boolean}
     * @memberof Tenant
     */
    _default?: boolean;
    /**
     * @type {string}
     * @memberof Tenant
     */
    branding_title?: string;
    /**
     * @type {string}
     * @memberof Tenant
     */
    branding_logo?: string;
    /**
     * @type {string}
     * @memberof Tenant
     */
    branding_favicon?: string;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_authentication?: string | null;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_invalidation?: string | null;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_recovery?: string | null;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_unenrollment?: string | null;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_user_settings?: string | null;
    /**
     * @type {string}
     * @memberof Tenant
     */
    flow_device_code?: string | null;
    /**
     * Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2).
     * @type {string}
     * @memberof Tenant
     */
    event_retention?: string;
    /**
     * Web Certificate used by the authentik Core webserver.
     * @type {string}
     * @memberof Tenant
     */
    web_certificate?: string | null;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof Tenant
     */
    attributes?: { [key: string]: any; };
}
