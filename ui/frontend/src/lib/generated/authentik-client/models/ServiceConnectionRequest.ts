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
 * ServiceConnection Serializer
 * @export
 * @interface ServiceConnectionRequest
 */
export interface ServiceConnectionRequest {
    /**
     * @type {string}
     * @memberof ServiceConnectionRequest
     */
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     * @type {boolean}
     * @memberof ServiceConnectionRequest
     */
    local?: boolean;
}