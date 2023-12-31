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
 * Static authenticator challenge
 * @export
 * @interface AuthenticatorStaticChallenge
 */
export interface AuthenticatorStaticChallenge {
    /**
     * @type {ChallengeChoices}
     * @memberof AuthenticatorStaticChallenge
     */
    type: ChallengeChoices;
    /**
     * @type {ContextualFlowInfo}
     * @memberof AuthenticatorStaticChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof AuthenticatorStaticChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof AuthenticatorStaticChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
    /**
     * @type {string}
     * @memberof AuthenticatorStaticChallenge
     */
    pending_user: string;
    /**
     * @type {string}
     * @memberof AuthenticatorStaticChallenge
     */
    pending_user_avatar: string;
    /**
     * @type {Array<string>}
     * @memberof AuthenticatorStaticChallenge
     */
    codes: Array<string>;
}


