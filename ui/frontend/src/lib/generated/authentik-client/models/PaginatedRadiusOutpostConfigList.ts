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
    RadiusOutpostConfig,
} from './';

/**
 * @export
 * @interface PaginatedRadiusOutpostConfigList
 */
export interface PaginatedRadiusOutpostConfigList {
    /**
     * @type {Pagination}
     * @memberof PaginatedRadiusOutpostConfigList
     */
    pagination: Pagination;
    /**
     * @type {Array<RadiusOutpostConfig>}
     * @memberof PaginatedRadiusOutpostConfigList
     */
    results: Array<RadiusOutpostConfig>;
}
