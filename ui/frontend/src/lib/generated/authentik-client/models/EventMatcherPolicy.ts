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
 * @interface EventMatcherPolicy
 */
export interface EventMatcherPolicy {
    /**
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof EventMatcherPolicy
     */
    execution_logging?: boolean;
    /**
     * Get object component so that we know how to edit the object
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    readonly meta_model_name: string;
    /**
     * Return objects policy is bound to
     * @type {number}
     * @memberof EventMatcherPolicy
     */
    readonly bound_to: number;
    /**
     * @type {EventActions}
     * @memberof EventMatcherPolicy
     */
    action?: EventActions | null;
    /**
     * Matches Event\'s Client IP (strict matching, for network matching use an Expression Policy)
     * @type {string}
     * @memberof EventMatcherPolicy
     */
    client_ip?: string | null;
    /**
     * @type {AppEnum}
     * @memberof EventMatcherPolicy
     */
    app?: AppEnum | null;
    /**
     * @type {ModelEnum}
     * @memberof EventMatcherPolicy
     */
    model?: ModelEnum | null;
}


