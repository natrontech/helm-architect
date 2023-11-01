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
 * SMS Setup challenge
 * @export
 * @interface AuthenticatorSMSChallenge
 */
export interface AuthenticatorSMSChallenge {
    /**
     * @type {ChallengeChoices}
     * @memberof AuthenticatorSMSChallenge
     */
    type: ChallengeChoices;
    /**
     * @type {ContextualFlowInfo}
     * @memberof AuthenticatorSMSChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof AuthenticatorSMSChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
    /**
     * @type {string}
     * @memberof AuthenticatorSMSChallenge
     */
    pending_user: string;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSChallenge
     */
    pending_user_avatar: string;
    /**
     * @type {boolean}
     * @memberof AuthenticatorSMSChallenge
     */
    phone_number_required?: boolean;
}

