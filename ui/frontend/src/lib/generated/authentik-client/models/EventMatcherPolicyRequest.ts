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
 * @interface EventMatcherPolicyRequest
 */
export interface EventMatcherPolicyRequest {
    /**
     * @type {string}
     * @memberof EventMatcherPolicyRequest
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof EventMatcherPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * @type {EventActions}
     * @memberof EventMatcherPolicyRequest
     */
    action?: EventActions | null;
    /**
     * Matches Event\'s Client IP (strict matching, for network matching use an Expression Policy)
     * @type {string}
     * @memberof EventMatcherPolicyRequest
     */
    client_ip?: string | null;
    /**
     * @type {AppEnum}
     * @memberof EventMatcherPolicyRequest
     */
    app?: AppEnum | null;
    /**
     * @type {ModelEnum}
     * @memberof EventMatcherPolicyRequest
     */
    model?: ModelEnum | null;
}


