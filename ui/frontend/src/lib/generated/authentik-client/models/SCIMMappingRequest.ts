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
 * SCIMMapping Serializer
 * @export
 * @interface SCIMMappingRequest
 */
export interface SCIMMappingRequest {
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     * @type {string}
     * @memberof SCIMMappingRequest
     */
    managed?: string | null;
    /**
     * @type {string}
     * @memberof SCIMMappingRequest
     */
    name: string;
    /**
     * @type {string}
     * @memberof SCIMMappingRequest
     */
    expression: string;
}
