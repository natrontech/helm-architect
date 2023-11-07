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
    Event,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedEventList
 */
export interface PaginatedEventList {
    /**
     * @type {Pagination}
     * @memberof PaginatedEventList
     */
    pagination: Pagination;
    /**
     * @type {Array<Event>}
     * @memberof PaginatedEventList
     */
    results: Array<Event>;
}
