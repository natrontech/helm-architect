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
 * Validation Error
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    [key: string]: any | any;
    /**
     * @type {Array<string>}
     * @memberof ValidationError
     */
    non_field_errors?: Array<string>;
    /**
     * @type {string}
     * @memberof ValidationError
     */
    code?: string;
}
