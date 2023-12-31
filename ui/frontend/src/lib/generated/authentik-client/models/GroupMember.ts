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
 * @interface GroupMember
 */
export interface GroupMember {
    /**
     * @type {number}
     * @memberof GroupMember
     */
    readonly pk: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof GroupMember
     */
    username: string;
    /**
     * User\'s display name.
     * @type {string}
     * @memberof GroupMember
     */
    name: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof GroupMember
     */
    is_active?: boolean;
    /**
     * @type {string}
     * @memberof GroupMember
     */
    last_login?: string | null;
    /**
     * @type {string}
     * @memberof GroupMember
     */
    email?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof GroupMember
     */
    attributes?: { [key: string]: any; };
    /**
     * @type {string}
     * @memberof GroupMember
     */
    readonly uid: string;
}
