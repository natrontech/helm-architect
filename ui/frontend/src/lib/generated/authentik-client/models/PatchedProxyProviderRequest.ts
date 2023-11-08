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
    ProxyMode,
} from './';

/**
 * ProxyProvider Serializer
 * @export
 * @interface PatchedProxyProviderRequest
 */
export interface PatchedProxyProviderRequest {
    /**
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    name?: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    authorization_flow?: string;
    /**
     * @type {Array<string>}
     * @memberof PatchedProxyProviderRequest
     */
    property_mappings?: Array<string>;
    /**
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    internal_host?: string;
    /**
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    external_host?: string;
    /**
     * Validate SSL Certificates of upstream servers
     * @type {boolean}
     * @memberof PatchedProxyProviderRequest
     */
    internal_host_ssl_validation?: boolean;
    /**
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    certificate?: string | null;
    /**
     * Regular expressions for which authentication is not required. Each new line is interpreted as a new Regular Expression.
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    skip_path_regex?: string;
    /**
     * Set a custom HTTP-Basic Authentication header based on values from authentik.
     * @type {boolean}
     * @memberof PatchedProxyProviderRequest
     */
    basic_auth_enabled?: boolean;
    /**
     * User/Group Attribute used for the password part of the HTTP-Basic Header.
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    basic_auth_password_attribute?: string;
    /**
     * User/Group Attribute used for the user part of the HTTP-Basic Header. If not set, the user\'s Email address is used.
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    basic_auth_user_attribute?: string;
    /**
     * @type {ProxyMode}
     * @memberof PatchedProxyProviderRequest
     */
    mode?: ProxyMode;
    /**
     * When enabled, this provider will intercept the authorization header and authenticate requests based on its value.
     * @type {boolean}
     * @memberof PatchedProxyProviderRequest
     */
    intercept_header_auth?: boolean;
    /**
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    cookie_domain?: string;
    /**
     * @type {Array<string>}
     * @memberof PatchedProxyProviderRequest
     */
    jwks_sources?: Array<string>;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    access_token_validity?: string;
    /**
     * Tokens not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     * @type {string}
     * @memberof PatchedProxyProviderRequest
     */
    refresh_token_validity?: string;
}


