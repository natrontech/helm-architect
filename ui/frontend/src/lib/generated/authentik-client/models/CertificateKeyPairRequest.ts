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
 * @interface CertificateKeyPairRequest
 */
export interface CertificateKeyPairRequest {
    /**
     * @type {string}
     * @memberof CertificateKeyPairRequest
     */
    name: string;
    /**
     * PEM-encoded Certificate data
     * @type {string}
     * @memberof CertificateKeyPairRequest
     */
    certificate_data: string;
    /**
     * Optional Private Key. If this is set, you can use this keypair for encryption.
     * @type {string}
     * @memberof CertificateKeyPairRequest
     */
    key_data?: string;
}
