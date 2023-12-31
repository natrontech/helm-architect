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
    TokenModel,
} from './';

/**
 * @export
 * @interface PaginatedTokenModelList
 */
export interface PaginatedTokenModelList {
    /**
     * @type {Pagination}
     * @memberof PaginatedTokenModelList
     */
    pagination: Pagination;
    /**
     * @type {Array<TokenModel>}
     * @memberof PaginatedTokenModelList
     */
    results: Array<TokenModel>;
}
