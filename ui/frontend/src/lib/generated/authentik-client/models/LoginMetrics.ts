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
    Coordinate,
} from './';

/**
 * Login Metrics per 1h
 * @export
 * @interface LoginMetrics
 */
export interface LoginMetrics {
    /**
     * @type {Array<Coordinate>}
     * @memberof LoginMetrics
     */
    readonly logins: Array<Coordinate>;
    /**
     * @type {Array<Coordinate>}
     * @memberof LoginMetrics
     */
    readonly logins_failed: Array<Coordinate>;
    /**
     * @type {Array<Coordinate>}
     * @memberof LoginMetrics
     */
    readonly authorizations: Array<Coordinate>;
}
