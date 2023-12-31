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
    FlowSetRequest,
} from './';

/**
 * InvitationStage Serializer
 * @export
 * @interface InvitationStageRequest
 */
export interface InvitationStageRequest {
    /**
     * @type {string}
     * @memberof InvitationStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof InvitationStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given.
     * @type {boolean}
     * @memberof InvitationStageRequest
     */
    continue_flow_without_invitation?: boolean;
}
