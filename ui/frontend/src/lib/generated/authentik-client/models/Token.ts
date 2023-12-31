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
    IntentEnum,
    User,
} from './';

/**
 * Token Serializer
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * @type {string}
     * @memberof Token
     */
    readonly pk: string;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     * @type {string}
     * @memberof Token
     */
    managed?: string | null;
    /**
     * @type {string}
     * @memberof Token
     */
    identifier: string;
    /**
     * @type {IntentEnum}
     * @memberof Token
     */
    intent?: IntentEnum;
    /**
     * @type {number}
     * @memberof Token
     */
    user?: number;
    /**
     * @type {User}
     * @memberof Token
     */
    readonly user_obj: User;
    /**
     * @type {string}
     * @memberof Token
     */
    description?: string;
    /**
     * @type {string}
     * @memberof Token
     */
    expires?: string;
    /**
     * @type {boolean}
     * @memberof Token
     */
    expiring?: boolean;
}


