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
    Prompt,
} from './';

/**
 * @export
 * @interface PaginatedPromptList
 */
export interface PaginatedPromptList {
    /**
     * @type {Pagination}
     * @memberof PaginatedPromptList
     */
    pagination: Pagination;
    /**
     * @type {Array<Prompt>}
     * @memberof PaginatedPromptList
     */
    results: Array<Prompt>;
}
