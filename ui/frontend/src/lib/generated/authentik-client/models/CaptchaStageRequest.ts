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
 * CaptchaStage Serializer
 * @export
 * @interface CaptchaStageRequest
 */
export interface CaptchaStageRequest {
    /**
     * @type {string}
     * @memberof CaptchaStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof CaptchaStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Public key, acquired your captcha Provider.
     * @type {string}
     * @memberof CaptchaStageRequest
     */
    public_key: string;
    /**
     * Private key, acquired your captcha Provider.
     * @type {string}
     * @memberof CaptchaStageRequest
     */
    private_key: string;
    /**
     * @type {string}
     * @memberof CaptchaStageRequest
     */
    js_url?: string;
    /**
     * @type {string}
     * @memberof CaptchaStageRequest
     */
    api_url?: string;
}
