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
    AuthenticationEnum,
    DeniedActionEnum,
    FlowDesignationEnum,
    LayoutEnum,
    PolicyEngineMode,
} from './';

/**
 * Flow Serializer
 * @export
 * @interface PatchedFlowRequest
 */
export interface PatchedFlowRequest {
    /**
     * @type {string}
     * @memberof PatchedFlowRequest
     */
    name?: string;
    /**
     * Visible in the URL.
     * @type {string}
     * @memberof PatchedFlowRequest
     */
    slug?: string;
    /**
     * Shown as the Title in Flow pages.
     * @type {string}
     * @memberof PatchedFlowRequest
     */
    title?: string;
    /**
     * @type {FlowDesignationEnum}
     * @memberof PatchedFlowRequest
     */
    designation?: FlowDesignationEnum;
    /**
     * @type {PolicyEngineMode}
     * @memberof PatchedFlowRequest
     */
    policy_engine_mode?: PolicyEngineMode;
    /**
     * Enable compatibility mode, increases compatibility with password managers on mobile devices.
     * @type {boolean}
     * @memberof PatchedFlowRequest
     */
    compatibility_mode?: boolean;
    /**
     * @type {LayoutEnum}
     * @memberof PatchedFlowRequest
     */
    layout?: LayoutEnum;
    /**
     * @type {DeniedActionEnum}
     * @memberof PatchedFlowRequest
     */
    denied_action?: DeniedActionEnum;
    /**
     * @type {AuthenticationEnum}
     * @memberof PatchedFlowRequest
     */
    authentication?: AuthenticationEnum;
}


