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
    LDAPOutpostConfig,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedLDAPOutpostConfigList
 */
export interface PaginatedLDAPOutpostConfigList {
    /**
     * @type {Pagination}
     * @memberof PaginatedLDAPOutpostConfigList
     */
    pagination: Pagination;
    /**
     * @type {Array<LDAPOutpostConfig>}
     * @memberof PaginatedLDAPOutpostConfigList
     */
    results: Array<LDAPOutpostConfig>;
}
