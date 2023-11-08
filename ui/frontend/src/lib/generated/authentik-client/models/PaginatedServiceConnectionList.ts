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
    ServiceConnection,
} from './';

/**
 * @export
 * @interface PaginatedServiceConnectionList
 */
export interface PaginatedServiceConnectionList {
    /**
     * @type {Pagination}
     * @memberof PaginatedServiceConnectionList
     */
    pagination: Pagination;
    /**
     * @type {Array<ServiceConnection>}
     * @memberof PaginatedServiceConnectionList
     */
    results: Array<ServiceConnection>;
}
