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
 * Serializer for sms authenticator devices
 * @export
 * @interface SMSDevice
 */
export interface SMSDevice {
    /**
     * The human-readable name of this device.
     * @type {string}
     * @memberof SMSDevice
     */
    name: string;
    /**
     * @type {number}
     * @memberof SMSDevice
     */
    readonly pk: number;
    /**
     * @type {string}
     * @memberof SMSDevice
     */
    readonly phone_number: string;
}