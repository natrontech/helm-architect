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
    UserWriteStage,
} from './';

/**
 * @export
 * @interface PaginatedUserWriteStageList
 */
export interface PaginatedUserWriteStageList {
    /**
     * @type {Pagination}
     * @memberof PaginatedUserWriteStageList
     */
    pagination: Pagination;
    /**
     * @type {Array<UserWriteStage>}
     * @memberof PaginatedUserWriteStageList
     */
    results: Array<UserWriteStage>;
}