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
    EventMatcherPolicy,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedEventMatcherPolicyList
 */
export interface PaginatedEventMatcherPolicyList {
    /**
     * @type {Pagination}
     * @memberof PaginatedEventMatcherPolicyList
     */
    pagination: Pagination;
    /**
     * @type {Array<EventMatcherPolicy>}
     * @memberof PaginatedEventMatcherPolicyList
     */
    results: Array<EventMatcherPolicy>;
}