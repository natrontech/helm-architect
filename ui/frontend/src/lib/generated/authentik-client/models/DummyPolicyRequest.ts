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
 * @interface DummyPolicyRequest
 */
export interface DummyPolicyRequest {
    /**
     * @type {string}
     * @memberof DummyPolicyRequest
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof DummyPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {boolean}
     * @memberof DummyPolicyRequest
     */
    result?: boolean;
    /**
     * @type {number}
     * @memberof DummyPolicyRequest
     */
    wait_min?: number;
    /**
     * @type {number}
     * @memberof DummyPolicyRequest
     */
    wait_max?: number;
}
