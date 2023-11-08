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
 * * `hashed_user_id` - Based on the Hashed User ID * `user_id` - Based on user ID * `user_uuid` - Based on user UUID * `user_username` - Based on the username * `user_email` - Based on the User\'s Email. This is recommended over the UPN method. * `user_upn` - Based on the User\'s UPN, only works if user has a \'upn\' attribute set. Use this method only if you have different UPN and Mail domains.
 * @export
 * @enum {string}
 */
export enum SubModeEnum {
    HashedUserId = 'hashed_user_id',
    UserId = 'user_id',
    UserUuid = 'user_uuid',
    UserUsername = 'user_username',
    UserEmail = 'user_email',
    UserUpn = 'user_upn'
}

