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
    ChallengeChoices,
    ContextualFlowInfo,
    ErrorDetail,
} from './';

/**
 * OAuth Device code challenge
 * @export
 * @interface OAuthDeviceCodeChallenge
 */
export interface OAuthDeviceCodeChallenge {
    /**
     * @type {ChallengeChoices}
     * @memberof OAuthDeviceCodeChallenge
     */
    type: ChallengeChoices;
    /**
     * @type {ContextualFlowInfo}
     * @memberof OAuthDeviceCodeChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof OAuthDeviceCodeChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof OAuthDeviceCodeChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
}


