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
    AppEnum,
    EventActions,
    ModelEnum,
} from './';

/**
 * Event Matcher Policy Serializer
 * @export
 * @interface PatchedEventMatcherPolicyRequest
 */
export interface PatchedEventMatcherPolicyRequest {
    /**
     * @type {string}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {EventActions}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    action?: EventActions | null;
    /**
     * Matches Event\'s Client IP (strict matching, for network matching use an Expression Policy)
     * @type {string}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    client_ip?: string | null;
    /**
     * @type {AppEnum}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    app?: AppEnum | null;
    /**
     * @type {ModelEnum}
     * @memberof PatchedEventMatcherPolicyRequest
     */
    model?: ModelEnum | null;
}


