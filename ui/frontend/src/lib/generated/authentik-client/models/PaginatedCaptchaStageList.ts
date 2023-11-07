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
    CaptchaStage,
    Pagination,
} from './';

/**
 * @export
 * @interface PaginatedCaptchaStageList
 */
export interface PaginatedCaptchaStageList {
    /**
     * @type {Pagination}
     * @memberof PaginatedCaptchaStageList
     */
    pagination: Pagination;
    /**
     * @type {Array<CaptchaStage>}
     * @memberof PaginatedCaptchaStageList
     */
    results: Array<CaptchaStage>;
}
