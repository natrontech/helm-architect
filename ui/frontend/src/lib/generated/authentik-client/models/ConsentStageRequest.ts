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
    ConsentStageModeEnum,
    FlowSetRequest,
} from './';

/**
 * ConsentStage Serializer
 * @export
 * @interface ConsentStageRequest
 */
export interface ConsentStageRequest {
    /**
     * @type {string}
     * @memberof ConsentStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof ConsentStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * @type {ConsentStageModeEnum}
     * @memberof ConsentStageRequest
     */
    mode?: ConsentStageModeEnum;
    /**
     * Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3).
     * @type {string}
     * @memberof ConsentStageRequest
     */
    consent_expire_in?: string;
}

