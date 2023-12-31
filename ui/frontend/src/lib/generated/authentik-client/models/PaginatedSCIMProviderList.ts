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
    SCIMProvider,
} from './';

/**
 * @export
 * @interface PaginatedSCIMProviderList
 */
export interface PaginatedSCIMProviderList {
    /**
     * @type {Pagination}
     * @memberof PaginatedSCIMProviderList
     */
    pagination: Pagination;
    /**
     * @type {Array<SCIMProvider>}
     * @memberof PaginatedSCIMProviderList
     */
    results: Array<SCIMProvider>;
}
