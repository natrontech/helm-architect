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
    DigestAlgorithmEnum,
    SignatureAlgorithmEnum,
    SpBindingEnum,
} from './';

/**
 * SAMLProvider Serializer
 * @export
 * @interface PatchedSAMLProviderRequest
 */
export interface PatchedSAMLProviderRequest {
    /**
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    name?: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    authorization_flow?: string;
    /**
     * @type {Array<string>}
     * @memberof PatchedSAMLProviderRequest
     */
    property_mappings?: Array<string>;
    /**
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    acs_url?: string;
    /**
     * Value of the audience restriction field of the assertion. When left empty, no audience restriction will be added.
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    audience?: string;
    /**
     * Also known as EntityID
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    issuer?: string;
    /**
     * Assertion valid not before current time + this value (Format: hours=-1;minutes=-2;seconds=-3).
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    assertion_valid_not_before?: string;
    /**
     * Assertion not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    assertion_valid_not_on_or_after?: string;
    /**
     * Session not valid on or after current time + this value (Format: hours=1;minutes=2;seconds=3).
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    session_valid_not_on_or_after?: string;
    /**
     * Configure how the NameID value will be created. When left empty, the NameIDPolicy of the incoming request will be considered
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    name_id_mapping?: string | null;
    /**
     * @type {DigestAlgorithmEnum}
     * @memberof PatchedSAMLProviderRequest
     */
    digest_algorithm?: DigestAlgorithmEnum;
    /**
     * @type {SignatureAlgorithmEnum}
     * @memberof PatchedSAMLProviderRequest
     */
    signature_algorithm?: SignatureAlgorithmEnum;
    /**
     * Keypair used to sign outgoing Responses going to the Service Provider.
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    signing_kp?: string | null;
    /**
     * When selected, incoming assertion\'s Signatures will be validated against this certificate. To allow unsigned Requests, leave on default.
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    verification_kp?: string | null;
    /**
     * @type {SpBindingEnum}
     * @memberof PatchedSAMLProviderRequest
     */
    sp_binding?: SpBindingEnum;
    /**
     * Default relay_state value for IDP-initiated logins
     * @type {string}
     * @memberof PatchedSAMLProviderRequest
     */
    default_relay_state?: string;
}


