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
    SCIMMapping,
} from './';

/**
 * @export
 * @interface PaginatedSCIMMappingList
 */
export interface PaginatedSCIMMappingList {
    /**
     * @type {Pagination}
     * @memberof PaginatedSCIMMappingList
     */
    pagination: Pagination;
    /**
     * @type {Array<SCIMMapping>}
     * @memberof PaginatedSCIMMappingList
     */
    results: Array<SCIMMapping>;
}
