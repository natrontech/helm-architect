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
 * SAMLPropertyMapping Serializer
 * @export
 * @interface SAMLPropertyMappingRequest
 */
export interface SAMLPropertyMappingRequest {
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     * @type {string}
     * @memberof SAMLPropertyMappingRequest
     */
    managed?: string | null;
    /**
     * @type {string}
     * @memberof SAMLPropertyMappingRequest
     */
    name: string;
    /**
     * @type {string}
     * @memberof SAMLPropertyMappingRequest
     */
    expression: string;
    /**
     * @type {string}
     * @memberof SAMLPropertyMappingRequest
     */
    saml_name: string;
    /**
     * @type {string}
     * @memberof SAMLPropertyMappingRequest
     */
    friendly_name?: string | null;
}
