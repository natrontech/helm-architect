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
    FlowSet,
} from './';

/**
 * InvitationStage Serializer
 * @export
 * @interface InvitationStage
 */
export interface InvitationStage {
    /**
     * @type {string}
     * @memberof InvitationStage
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof InvitationStage
     */
    name: string;
    /**
     * Get object type so that we know how to edit the object
     * @type {string}
     * @memberof InvitationStage
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof InvitationStage
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof InvitationStage
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof InvitationStage
     */
    readonly meta_model_name: string;
    /**
     * @type {Array<FlowSet>}
     * @memberof InvitationStage
     */
    flow_set?: Array<FlowSet>;
    /**
     * If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given.
     * @type {boolean}
     * @memberof InvitationStage
     */
    continue_flow_without_invitation?: boolean;
}
