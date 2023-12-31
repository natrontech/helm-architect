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
    ProxyOutpostConfig,
} from './';

/**
 * @export
 * @interface PaginatedProxyOutpostConfigList
 */
export interface PaginatedProxyOutpostConfigList {
    /**
     * @type {Pagination}
     * @memberof PaginatedProxyOutpostConfigList
     */
    pagination: Pagination;
    /**
     * @type {Array<ProxyOutpostConfig>}
     * @memberof PaginatedProxyOutpostConfigList
     */
    results: Array<ProxyOutpostConfig>;
}
