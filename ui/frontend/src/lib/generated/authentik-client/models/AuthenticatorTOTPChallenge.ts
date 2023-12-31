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
 * TOTP Setup challenge
 * @export
 * @interface AuthenticatorTOTPChallenge
 */
export interface AuthenticatorTOTPChallenge {
    /**
     * @type {ChallengeChoices}
     * @memberof AuthenticatorTOTPChallenge
     */
    type: ChallengeChoices;
    /**
     * @type {ContextualFlowInfo}
     * @memberof AuthenticatorTOTPChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof AuthenticatorTOTPChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPChallenge
     */
    pending_user: string;
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPChallenge
     */
    pending_user_avatar: string;
    /**
     * @type {string}
     * @memberof AuthenticatorTOTPChallenge
     */
    config_url: string;
}


