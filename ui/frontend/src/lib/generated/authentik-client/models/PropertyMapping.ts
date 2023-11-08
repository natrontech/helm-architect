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
 * PropertyMapping Serializer
 * @export
 * @interface PropertyMapping
 */
export interface PropertyMapping {
    /**
     * @type {string}
     * @memberof PropertyMapping
     */
    readonly pk: string;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     * @type {string}
     * @memberof PropertyMapping
     */
    managed?: string | null;
    /**
     * @type {string}
     * @memberof PropertyMapping
     */
    name: string;
    /**
     * @type {string}
     * @memberof PropertyMapping
     */
    expression: string;
    /**
     * Get object\'s component so that we know how to edit the object
     * @type {string}
     * @memberof PropertyMapping
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof PropertyMapping
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof PropertyMapping
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof PropertyMapping
     */
    readonly meta_model_name: string;
}
