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
 * Reputation Policy Serializer
 * @export
 * @interface ReputationPolicyRequest
 */
export interface ReputationPolicyRequest {
    /**
     * @type {string}
     * @memberof ReputationPolicyRequest
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof ReputationPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {boolean}
     * @memberof ReputationPolicyRequest
     */
    check_ip?: boolean;
    /**
     * @type {boolean}
     * @memberof ReputationPolicyRequest
     */
    check_username?: boolean;
    /**
     * @type {number}
     * @memberof ReputationPolicyRequest
     */
    threshold?: number;
}
