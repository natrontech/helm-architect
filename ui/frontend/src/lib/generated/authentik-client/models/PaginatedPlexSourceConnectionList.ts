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
    PlexSourceConnection,
} from './';

/**
 * @export
 * @interface PaginatedPlexSourceConnectionList
 */
export interface PaginatedPlexSourceConnectionList {
    /**
     * @type {Pagination}
     * @memberof PaginatedPlexSourceConnectionList
     */
    pagination: Pagination;
    /**
     * @type {Array<PlexSourceConnection>}
     * @memberof PaginatedPlexSourceConnectionList
     */
    results: Array<PlexSourceConnection>;
}
