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
 * UserLoginStage Serializer
 * @export
 * @interface UserLoginStageRequest
 */
export interface UserLoginStageRequest {
    /**
     * @type {string}
     * @memberof UserLoginStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof UserLoginStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3)
     * @type {string}
     * @memberof UserLoginStageRequest
     */
    session_duration?: string;
    /**
     * Terminate all other sessions of the user logging in.
     * @type {boolean}
     * @memberof UserLoginStageRequest
     */
    terminate_other_sessions?: boolean;
    /**
     * Offset the session will be extended by when the user picks the remember me option. Default of 0 means that the remember me option will not be shown. (Format: hours=-1;minutes=-2;seconds=-3)
     * @type {string}
     * @memberof UserLoginStageRequest
     */
    remember_me_offset?: string;
}