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
    FlowSetRequest,
} from './';

/**
 * AuthenticatorStaticStage Serializer
 * @export
 * @interface AuthenticatorStaticStageRequest
 */
export interface AuthenticatorStaticStageRequest {
    /**
     * @type {string}
     * @memberof AuthenticatorStaticStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof AuthenticatorStaticStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof AuthenticatorStaticStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticatorStaticStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {number}
     * @memberof AuthenticatorStaticStageRequest
     */
    token_count?: number;
    /**
     * @type {number}
     * @memberof AuthenticatorStaticStageRequest
     */
    token_length?: number;
}