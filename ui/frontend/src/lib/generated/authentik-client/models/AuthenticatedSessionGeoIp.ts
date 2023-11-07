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
 * Get parsed user agent
 * @export
 * @interface AuthenticatedSessionGeoIp
 */
export interface AuthenticatedSessionGeoIp {
    /**
     * @type {string}
     * @memberof AuthenticatedSessionGeoIp
     */
    continent: string;
    /**
     * @type {string}
     * @memberof AuthenticatedSessionGeoIp
     */
    country: string;
    /**
     * @type {number}
     * @memberof AuthenticatedSessionGeoIp
     */
    lat: number;
    /**
     * @type {number}
     * @memberof AuthenticatedSessionGeoIp
     */
    _long: number;
    /**
     * @type {string}
     * @memberof AuthenticatedSessionGeoIp
     */
    city: string;
}
