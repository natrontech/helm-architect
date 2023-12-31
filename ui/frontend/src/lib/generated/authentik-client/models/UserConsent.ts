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
    Application,
    User,
} from './';

/**
 * UserConsent Serializer
 * @export
 * @interface UserConsent
 */
export interface UserConsent {
    /**
     * @type {number}
     * @memberof UserConsent
     */
    readonly pk: number;
    /**
     * @type {string}
     * @memberof UserConsent
     */
    expires?: string;
    /**
     * @type {User}
     * @memberof UserConsent
     */
    user: User;
    /**
     * @type {Application}
     * @memberof UserConsent
     */
    application: Application;
    /**
     * @type {string}
     * @memberof UserConsent
     */
    permissions?: string;
}
