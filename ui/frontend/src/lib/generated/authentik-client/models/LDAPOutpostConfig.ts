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

import type {
    LDAPAPIAccessMode,
} from './';

/**
 * LDAPProvider Serializer
 * @export
 * @interface LDAPOutpostConfig
 */
export interface LDAPOutpostConfig {
    /**
     * @type {number}
     * @memberof LDAPOutpostConfig
     */
    readonly pk: number;
    /**
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    name: string;
    /**
     * DN under which objects are accessible.
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    base_dn?: string;
    /**
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    bind_flow_slug: string;
    /**
     * Prioritise backchannel slug over direct application slug
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    readonly application_slug: string;
    /**
     * Users in this group can do search queries. If not set, every user can execute search queries.
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    search_group?: string | null;
    /**
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    certificate?: string | null;
    /**
     * @type {string}
     * @memberof LDAPOutpostConfig
     */
    tls_server_name?: string;
    /**
     * The start for uidNumbers, this number is added to the user.pk to make sure that the numbers aren\'t too low for POSIX users. Default is 2000 to ensure that we don\'t collide with local users uidNumber
     * @type {number}
     * @memberof LDAPOutpostConfig
     */
    uid_start_number?: number;
    /**
     * The start for gidNumbers, this number is added to a number generated from the group.pk to make sure that the numbers aren\'t too low for POSIX groups. Default is 4000 to ensure that we don\'t collide with local groups or users primary groups gidNumber
     * @type {number}
     * @memberof LDAPOutpostConfig
     */
    gid_start_number?: number;
    /**
     * @type {LDAPAPIAccessMode}
     * @memberof LDAPOutpostConfig
     */
    search_mode?: LDAPAPIAccessMode;
    /**
     * @type {LDAPAPIAccessMode}
     * @memberof LDAPOutpostConfig
     */
    bind_mode?: LDAPAPIAccessMode;
    /**
     * When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon.
     * @type {boolean}
     * @memberof LDAPOutpostConfig
     */
    mfa_support?: boolean;
}

