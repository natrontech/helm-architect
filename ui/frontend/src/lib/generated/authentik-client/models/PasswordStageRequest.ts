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
    FlowSetRequest,
} from './';

/**
 * PasswordStage Serializer
 * @export
 * @interface PasswordStageRequest
 */
export interface PasswordStageRequest {
    /**
     * @type {string}
     * @memberof PasswordStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof PasswordStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Selection of backends to test the password against.
     * @type {Array<BackendsEnum>}
     * @memberof PasswordStageRequest
     */
    backends: Array<BackendsEnum>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof PasswordStageRequest
     */
    configure_flow?: string | null;
    /**
     * How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage.
     * @type {number}
     * @memberof PasswordStageRequest
     */
    failed_attempts_before_cancel?: number;
}
