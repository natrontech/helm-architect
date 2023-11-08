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
    OAuth2Provider,
    User,
} from './';

/**
 * Serializer for BaseGrantModel and RefreshToken
 * @export
 * @interface TokenModel
 */
export interface TokenModel {
    /**
     * @type {number}
     * @memberof TokenModel
     */
    readonly pk: number;
    /**
     * @type {OAuth2Provider}
     * @memberof TokenModel
     */
    provider: OAuth2Provider;
    /**
     * @type {User}
     * @memberof TokenModel
     */
    user: User;
    /**
     * Check if token is expired yet.
     * @type {boolean}
     * @memberof TokenModel
     */
    readonly is_expired: boolean;
    /**
     * @type {string}
     * @memberof TokenModel
     */
    expires?: string;
    /**
     * @type {Array<string>}
     * @memberof TokenModel
     */
    scope: Array<string>;
    /**
     * Get the token\'s id_token as JSON String
     * @type {string}
     * @memberof TokenModel
     */
    readonly id_token: string;
    /**
     * @type {boolean}
     * @memberof TokenModel
     */
    revoked?: boolean;
}
