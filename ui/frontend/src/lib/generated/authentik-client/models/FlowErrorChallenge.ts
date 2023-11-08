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
    ContextualFlowInfo,
    ErrorDetail,
} from './';

/**
 * Challenge class when an unhandled error occurs during a stage. Normal users are shown an error message, superusers are shown a full stacktrace.
 * @export
 * @interface FlowErrorChallenge
 */
export interface FlowErrorChallenge {
    /**
     * @type {string}
     * @memberof FlowErrorChallenge
     */
    type?: string;
    /**
     * @type {ContextualFlowInfo}
     * @memberof FlowErrorChallenge
     */
    flow_info?: ContextualFlowInfo;
    /**
     * @type {string}
     * @memberof FlowErrorChallenge
     */
    component?: string;
    /**
     * @type {{ [key: string]: Array<ErrorDetail>; }}
     * @memberof FlowErrorChallenge
     */
    response_errors?: { [key: string]: Array<ErrorDetail>; };
    /**
     * @type {string}
     * @memberof FlowErrorChallenge
     */
    request_id: string;
    /**
     * @type {string}
     * @memberof FlowErrorChallenge
     */
    error?: string;
    /**
     * @type {string}
     * @memberof FlowErrorChallenge
     */
    traceback?: string;
}
