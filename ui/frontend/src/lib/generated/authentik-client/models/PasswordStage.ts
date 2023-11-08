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
    BackendsEnum,
    FlowSet,
} from './';

/**
 * PasswordStage Serializer
 * @export
 * @interface PasswordStage
 */
export interface PasswordStage {
    /**
     * @type {string}
     * @memberof PasswordStage
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof PasswordStage
     */
    name: string;
    /**
     * Get object type so that we know how to edit the object
     * @type {string}
     * @memberof PasswordStage
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof PasswordStage
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof PasswordStage
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof PasswordStage
     */
    readonly meta_model_name: string;
    /**
     * @type {Array<FlowSet>}
     * @memberof PasswordStage
     */
    flow_set?: Array<FlowSet>;
    /**
     * Selection of backends to test the password against.
     * @type {Array<BackendsEnum>}
     * @memberof PasswordStage
     */
    backends: Array<BackendsEnum>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof PasswordStage
     */
    configure_flow?: string | null;
    /**
     * How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage.
     * @type {number}
     * @memberof PasswordStage
     */
    failed_attempts_before_cancel?: number;
}
