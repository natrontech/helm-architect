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
 * Password Expiry Policy Serializer
 * @export
 * @interface PasswordExpiryPolicyRequest
 */
export interface PasswordExpiryPolicyRequest {
    /**
     * @type {string}
     * @memberof PasswordExpiryPolicyRequest
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof PasswordExpiryPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {number}
     * @memberof PasswordExpiryPolicyRequest
     */
    days: number;
    /**
     * @type {boolean}
     * @memberof PasswordExpiryPolicyRequest
     */
    deny_only?: boolean;
}