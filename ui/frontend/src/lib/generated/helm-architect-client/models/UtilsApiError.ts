// tslint:disable
/**
 * Helm Architect Core API
 * The helm architect api serves the core features of the helm architect.
 *
 * The version of the OpenAPI document: alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface UtilsApiError
 */
export interface UtilsApiError {
    /**
     * @type {string}
     * @memberof UtilsApiError
     */
    detail?: string;
    /**
     * @type {object}
     * @memberof UtilsApiError
     */
    error?: object;
    /**
     * @type {string}
     * @memberof UtilsApiError
     */
    instance?: string;
    /**
     * @type {number}
     * @memberof UtilsApiError
     */
    status?: number;
    /**
     * @type {string}
     * @memberof UtilsApiError
     */
    title?: string;
    /**
     * @type {string}
     * @memberof UtilsApiError
     */
    type?: string;
}