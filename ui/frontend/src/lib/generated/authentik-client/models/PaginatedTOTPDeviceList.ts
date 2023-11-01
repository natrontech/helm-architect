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
    Pagination,
    TOTPDevice,
} from './';

/**
 * @export
 * @interface PaginatedTOTPDeviceList
 */
export interface PaginatedTOTPDeviceList {
    /**
     * @type {Pagination}
     * @memberof PaginatedTOTPDeviceList
     */
    pagination: Pagination;
    /**
     * @type {Array<TOTPDevice>}
     * @memberof PaginatedTOTPDeviceList
     */
    results: Array<TOTPDevice>;
}