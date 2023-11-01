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
 * Password challenge response
 * @export
 * @interface PasswordChallengeResponseRequest
 */
export interface PasswordChallengeResponseRequest {
    /**
     * @type {string}
     * @memberof PasswordChallengeResponseRequest
     */
    component?: string;
    /**
     * @type {string}
     * @memberof PasswordChallengeResponseRequest
     */
    password: string;
}