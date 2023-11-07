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

/**
 * Stripped down user serializer to show relevant users for groups
 * @export
 * @interface GroupMemberRequest
 */
export interface GroupMemberRequest {
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof GroupMemberRequest
     */
    username: string;
    /**
     * User\'s display name.
     * @type {string}
     * @memberof GroupMemberRequest
     */
    name: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof GroupMemberRequest
     */
    is_active?: boolean;
    /**
     * @type {string}
     * @memberof GroupMemberRequest
     */
    last_login?: string | null;
    /**
     * @type {string}
     * @memberof GroupMemberRequest
     */
    email?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof GroupMemberRequest
     */
    attributes?: { [key: string]: any; };
}
