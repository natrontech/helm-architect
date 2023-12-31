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
    DeviceChallenge,
    ErrorDetail,
    SelectableStage,
} from './';

/**
 * Authenticator challenge
 * @export
 * @interface AuthenticatorValidationChallenge
 */
export interface AuthenticatorValidationChallenge {
    /**
     * @type {ChallengeChoices}
     * @memberof AuthenticatorValidationChallenge
     */
    type: ChallengeChoices;
    /**
     * @type {ContextualFlowInfo}
     * @memberof AuthenticatorValidationChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof AuthenticatorValidationChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof AuthenticatorValidationChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
    /**
     * @type {string}
     * @memberof AuthenticatorValidationChallenge
     */
    pending_user: string;
    /**
     * @type {string}
     * @memberof AuthenticatorValidationChallenge
     */
    pending_user_avatar: string;
    /**
     * @type {Array<DeviceChallenge>}
     * @memberof AuthenticatorValidationChallenge
     */
    device_challenges: Array<DeviceChallenge>;
    /**
     * @type {Array<SelectableStage>}
     * @memberof AuthenticatorValidationChallenge
     */
    configuration_stages: Array<SelectableStage>;
}


