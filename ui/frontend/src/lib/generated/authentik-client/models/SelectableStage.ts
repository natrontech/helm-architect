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

/**
 * Serializer for stages which can be selected by users
 * @export
 * @interface SelectableStage
 */
export interface SelectableStage {
    /**
     * @type {string}
     * @memberof SelectableStage
     */
    pk: string;
    /**
     * @type {string}
     * @memberof SelectableStage
     */
    name: string;
    /**
     * @type {string}
     * @memberof SelectableStage
     */
    verbose_name: string;
    /**
     * @type {string}
     * @memberof SelectableStage
     */
    meta_model_name: string;
}