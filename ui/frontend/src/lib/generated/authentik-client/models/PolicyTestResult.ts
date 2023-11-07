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
 * result of a policy test
 * @export
 * @interface PolicyTestResult
 */
export interface PolicyTestResult {
    /**
     * @type {boolean}
     * @memberof PolicyTestResult
     */
    passing: boolean;
    /**
     * @type {Array<string>}
     * @memberof PolicyTestResult
     */
    readonly messages: Array<string>;
    /**
     * @type {Array<{ [key: string]: any; }>}
     * @memberof PolicyTestResult
     */
    readonly log_messages: Array<{ [key: string]: any; }>;
}
