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
 * @interface PasswordPolicy
 */
export interface PasswordPolicy {
    /**
     * @type {string}
     * @memberof PasswordPolicy
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof PasswordPolicy
     */
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     * @type {boolean}
     * @memberof PasswordPolicy
     */
    execution_logging?: boolean;
    /**
     * Get object component so that we know how to edit the object
     * @type {string}
     * @memberof PasswordPolicy
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof PasswordPolicy
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof PasswordPolicy
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof PasswordPolicy
     */
    readonly meta_model_name: string;
    /**
     * Return objects policy is bound to
     * @type {number}
     * @memberof PasswordPolicy
     */
    readonly bound_to: number;
    /**
     * Field key to check, field keys defined in Prompt stages are available.
     * @type {string}
     * @memberof PasswordPolicy
     */
    password_field?: string;
    /**
     * @type {number}
     * @memberof PasswordPolicy
     */
    amount_digits?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicy
     */
    amount_uppercase?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicy
     */
    amount_lowercase?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicy
     */
    amount_symbols?: number;
    /**
     * @type {number}
     * @memberof PasswordPolicy
     */
    length_min?: number;
    /**
     * @type {string}
     * @memberof PasswordPolicy
     */
    symbol_charset?: string;
    /**
     * @type {string}
     * @memberof PasswordPolicy
     */
    error_message?: string;
    /**
     * @type {boolean}
     * @memberof PasswordPolicy
     */
    check_static_rules?: boolean;
    /**
     * @type {boolean}
     * @memberof PasswordPolicy
     */
    check_have_i_been_pwned?: boolean;
    /**
     * @type {boolean}
     * @memberof PasswordPolicy
     */
    check_zxcvbn?: boolean;
    /**
     * How many times the password hash is allowed to be on haveibeenpwned
     * @type {number}
     * @memberof PasswordPolicy
     */
    hibp_allowed_count?: number;
    /**
     * If the zxcvbn score is equal or less than this value, the policy will fail.
     * @type {number}
     * @memberof PasswordPolicy
     */
    zxcvbn_score_threshold?: number;
}
