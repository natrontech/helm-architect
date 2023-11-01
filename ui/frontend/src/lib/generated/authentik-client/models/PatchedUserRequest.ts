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
    UserTypeEnum,
} from './';

/**
 * User Serializer
 * @export
 * @interface PatchedUserRequest
 */
export interface PatchedUserRequest {
    /**
     * @type {string}
     * @memberof PatchedUserRequest
     */
    username?: string;
    /**
     * User\'s display name.
     * @type {string}
     * @memberof PatchedUserRequest
     */
    name?: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof PatchedUserRequest
     */
    is_active?: boolean;
    /**
     * @type {string}
     * @memberof PatchedUserRequest
     */
    last_login?: string | null;
    /**
     * @type {Array<string>}
     * @memberof PatchedUserRequest
     */
    groups?: Array<string>;
    /**
     * @type {string}
     * @memberof PatchedUserRequest
     */
    email?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof PatchedUserRequest
     */
    attributes?: { [key: string]: any; };
    /**
     * @type {string}
     * @memberof PatchedUserRequest
     */
    path?: string;
    /**
     * @type {UserTypeEnum}
     * @memberof PatchedUserRequest
     */
    type?: UserTypeEnum;
}

