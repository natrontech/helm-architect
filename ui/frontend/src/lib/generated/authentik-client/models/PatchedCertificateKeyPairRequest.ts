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
 * CertificateKeyPair Serializer
 * @export
 * @interface PatchedCertificateKeyPairRequest
 */
export interface PatchedCertificateKeyPairRequest {
    /**
     * @type {string}
     * @memberof PatchedCertificateKeyPairRequest
     */
    name?: string;
    /**
     * PEM-encoded Certificate data
     * @type {string}
     * @memberof PatchedCertificateKeyPairRequest
     */
    certificate_data?: string;
    /**
     * Optional Private Key. If this is set, you can use this keypair for encryption.
     * @type {string}
     * @memberof PatchedCertificateKeyPairRequest
     */
    key_data?: string;
}
