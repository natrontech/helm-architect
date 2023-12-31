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
    AuthenticatorDuoStage,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedAuthenticatorDuoStageList
 */
export interface PaginatedAuthenticatorDuoStageList {
    /**
     * @type {Pagination}
     * @memberof PaginatedAuthenticatorDuoStageList
     */
    pagination: Pagination;
    /**
     * @type {Array<AuthenticatorDuoStage>}
     * @memberof PaginatedAuthenticatorDuoStageList
     */
    results: Array<AuthenticatorDuoStage>;
}
