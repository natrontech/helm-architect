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
 * PromptStage Serializer
 * @export
 * @interface PromptStage
 */
export interface PromptStage {
    /**
     * @type {string}
     * @memberof PromptStage
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof PromptStage
     */
    name: string;
    /**
     * Get object type so that we know how to edit the object
     * @type {string}
     * @memberof PromptStage
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof PromptStage
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof PromptStage
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof PromptStage
     */
    readonly meta_model_name: string;
    /**
     * @type {Array<FlowSet>}
     * @memberof PromptStage
     */
    flow_set?: Array<FlowSet>;
    /**
     * @type {Array<string>}
     * @memberof PromptStage
     */
    fields: Array<string>;
    /**
     * @type {Array<string>}
     * @memberof PromptStage
     */
    validation_policies?: Array<string>;
}
