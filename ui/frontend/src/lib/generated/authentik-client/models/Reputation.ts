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
 * Reputation Serializer
 * @export
 * @interface Reputation
 */
export interface Reputation {
    /**
     * @type {string}
     * @memberof Reputation
     */
    pk?: string;
    /**
     * @type {string}
     * @memberof Reputation
     */
    identifier: string;
    /**
     * @type {string}
     * @memberof Reputation
     */
    ip: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof Reputation
     */
    ip_geo_data?: { [key: string]: any; };
    /**
     * @type {number}
     * @memberof Reputation
     */
    score?: number;
    /**
     * @type {string}
     * @memberof Reputation
     */
    readonly updated: string;
}