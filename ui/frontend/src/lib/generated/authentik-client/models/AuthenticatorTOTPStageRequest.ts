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
    DigitsEnum,
    FlowSetRequest,
} from './';

/**
 * AuthenticatorTOTPStage Serializer
 * @export
 * @interface AuthenticatorTOTPStageRequest
 */
export interface AuthenticatorTOTPStageRequest {
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof AuthenticatorTOTPStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof AuthenticatorTOTPStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {DigitsEnum}
     * @memberof AuthenticatorTOTPStageRequest
     */
    digits: DigitsEnum;
}


