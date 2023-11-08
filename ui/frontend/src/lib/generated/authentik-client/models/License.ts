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
 * License Serializer
 * @export
 * @interface License
 */
export interface License {
    /**
     * @type {string}
     * @memberof License
     */
    readonly license_uuid: string;
    /**
     * @type {string}
     * @memberof License
     */
    readonly name: string;
    /**
     * @type {string}
     * @memberof License
     */
    key: string;
    /**
     * @type {string}
     * @memberof License
     */
    readonly expiry: string;
    /**
     * @type {number}
     * @memberof License
     */
    readonly internal_users: number;
    /**
     * @type {number}
     * @memberof License
     */
    readonly external_users: number;
}
