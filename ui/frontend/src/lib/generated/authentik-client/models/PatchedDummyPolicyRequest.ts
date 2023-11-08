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
 * Dummy Policy Serializer
 * @export
 * @interface PatchedDummyPolicyRequest
 */
export interface PatchedDummyPolicyRequest {
    /**
     * @type {string}
     * @memberof PatchedDummyPolicyRequest
     */
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof PatchedDummyPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {boolean}
     * @memberof PatchedDummyPolicyRequest
     */
    result?: boolean;
    /**
     * @type {number}
     * @memberof PatchedDummyPolicyRequest
     */
    wait_min?: number;
    /**
     * @type {number}
     * @memberof PatchedDummyPolicyRequest
     */
    wait_max?: number;
}
