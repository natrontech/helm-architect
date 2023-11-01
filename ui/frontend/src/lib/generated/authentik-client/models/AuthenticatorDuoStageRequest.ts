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
 * AuthenticatorDuoStage Serializer
 * @export
 * @interface AuthenticatorDuoStageRequest
 */
export interface AuthenticatorDuoStageRequest {
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof AuthenticatorDuoStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    client_id: string;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    client_secret: string;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    api_hostname: string;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    admin_integration_key?: string;
    /**
     * @type {string}
     * @memberof AuthenticatorDuoStageRequest
     */
    admin_secret_key?: string;
}