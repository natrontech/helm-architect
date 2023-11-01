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
    AuthenticateWebAuthnStage,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedAuthenticateWebAuthnStageList
 */
export interface PaginatedAuthenticateWebAuthnStageList {
    /**
     * @type {Pagination}
     * @memberof PaginatedAuthenticateWebAuthnStageList
     */
    pagination: Pagination;
    /**
     * @type {Array<AuthenticateWebAuthnStage>}
     * @memberof PaginatedAuthenticateWebAuthnStageList
     */
    results: Array<AuthenticateWebAuthnStage>;
}