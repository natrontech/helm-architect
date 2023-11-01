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
    AuthenticatorValidateStage,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedAuthenticatorValidateStageList
 */
export interface PaginatedAuthenticatorValidateStageList {
    /**
     * @type {Pagination}
     * @memberof PaginatedAuthenticatorValidateStageList
     */
    pagination: Pagination;
    /**
     * @type {Array<AuthenticatorValidateStage>}
     * @memberof PaginatedAuthenticatorValidateStageList
     */
    results: Array<AuthenticatorValidateStage>;
}