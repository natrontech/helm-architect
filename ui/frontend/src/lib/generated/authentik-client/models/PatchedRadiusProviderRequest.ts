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
 * RadiusProvider Serializer
 * @export
 * @interface PatchedRadiusProviderRequest
 */
export interface PatchedRadiusProviderRequest {
    /**
     * @type {string}
     * @memberof PatchedRadiusProviderRequest
     */
    name?: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     * @type {string}
     * @memberof PatchedRadiusProviderRequest
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     * @type {string}
     * @memberof PatchedRadiusProviderRequest
     */
    authorization_flow?: string;
    /**
     * @type {Array<string>}
     * @memberof PatchedRadiusProviderRequest
     */
    property_mappings?: Array<string>;
    /**
     * List of CIDRs (comma-separated) that clients can connect from. A more specific CIDR will match before a looser one. Clients connecting from a non-specified CIDR will be dropped.
     * @type {string}
     * @memberof PatchedRadiusProviderRequest
     */
    client_networks?: string;
    /**
     * Shared secret between clients and server to hash packets.
     * @type {string}
     * @memberof PatchedRadiusProviderRequest
     */
    shared_secret?: string;
    /**
     * When enabled, code-based multi-factor authentication can be used by appending a semicolon and the TOTP code to the password. This should only be enabled if all users that will bind to this provider have a TOTP device configured, as otherwise a password may incorrectly be rejected if it contains a semicolon.
     * @type {boolean}
     * @memberof PatchedRadiusProviderRequest
     */
    mfa_support?: boolean;
}