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
 * Password Policy Serializer
 * @export
 * @interface PasswordPolicyRequest
 */
export interface PasswordPolicyRequest {
    /**
     * @type {string}
     * @memberof PasswordPolicyRequest
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof PasswordPolicyRequest
     */
    execution_logging?: boolean;
    /**
     * Field key to check, field keys defined in Prompt stages are available.
     * @type {string}
     * @memberof PasswordPolicyRequest
     */
    password_field?: string;
    /**
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    amount_digits?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    amount_uppercase?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    amount_lowercase?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    amount_symbols?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    length_min?: number;
    /**
     * @type {string}
     * @memberof PasswordPolicyRequest
     */
    symbol_charset?: string;
    /**
     * @type {string}
     * @memberof PasswordPolicyRequest
     */
    error_message?: string;
    /**
     * @type {boolean}
     * @memberof PasswordPolicyRequest
     */
    check_static_rules?: boolean;
    /**
     * @type {boolean}
     * @memberof PasswordPolicyRequest
     */
    check_have_i_been_pwned?: boolean;
    /**
     * @type {boolean}
     * @memberof PasswordPolicyRequest
     */
    check_zxcvbn?: boolean;
    /**
     * How many times the password hash is allowed to be on haveibeenpwned
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    hibp_allowed_count?: number;
    /**
     * If the zxcvbn score is equal or less than this value, the policy will fail.
     * @type {number}
     * @memberof PasswordPolicyRequest
     */
    zxcvbn_score_threshold?: number;
}