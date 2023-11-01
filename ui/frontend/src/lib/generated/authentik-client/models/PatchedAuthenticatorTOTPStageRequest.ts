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
 * @interface PatchedAuthenticatorTOTPStageRequest
 */
export interface PatchedAuthenticatorTOTPStageRequest {
    /**
     * @type {string}
     * @memberof PatchedAuthenticatorTOTPStageRequest
     */
    name?: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof PatchedAuthenticatorTOTPStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof PatchedAuthenticatorTOTPStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof PatchedAuthenticatorTOTPStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {DigitsEnum}
     * @memberof PatchedAuthenticatorTOTPStageRequest
     */
    digits?: DigitsEnum;
}

