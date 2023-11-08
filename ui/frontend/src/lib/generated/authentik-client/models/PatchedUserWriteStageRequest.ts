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
    UserCreationModeEnum,
    UserTypeEnum,
} from './';

/**
 * UserWriteStage Serializer
 * @export
 * @interface PatchedUserWriteStageRequest
 */
export interface PatchedUserWriteStageRequest {
    /**
     * @type {string}
     * @memberof PatchedUserWriteStageRequest
     */
    name?: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof PatchedUserWriteStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * @type {UserCreationModeEnum}
     * @memberof PatchedUserWriteStageRequest
     */
    user_creation_mode?: UserCreationModeEnum;
    /**
     * When set, newly created users are inactive and cannot login.
     * @type {boolean}
     * @memberof PatchedUserWriteStageRequest
     */
    create_users_as_inactive?: boolean;
    /**
     * Optionally add newly created users to this group.
     * @type {string}
     * @memberof PatchedUserWriteStageRequest
     */
    create_users_group?: string | null;
    /**
     * @type {UserTypeEnum}
     * @memberof PatchedUserWriteStageRequest
     */
    user_type?: UserTypeEnum;
    /**
     * @type {string}
     * @memberof PatchedUserWriteStageRequest
     */
    user_path_template?: string;
}


