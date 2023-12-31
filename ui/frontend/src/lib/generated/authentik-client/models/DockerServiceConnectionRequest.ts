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
 * DockerServiceConnection Serializer
 * @export
 * @interface DockerServiceConnectionRequest
 */
export interface DockerServiceConnectionRequest {
    /**
     * @type {string}
     * @memberof DockerServiceConnectionRequest
     */
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     * @type {boolean}
     * @memberof DockerServiceConnectionRequest
     */
    local?: boolean;
    /**
     * Can be in the format of \'unix://<path>\' when connecting to a local docker daemon, or \'https://<hostname>:2376\' when connecting to a remote system.
     * @type {string}
     * @memberof DockerServiceConnectionRequest
     */
    url: string;
    /**
     * CA which the endpoint\'s Certificate is verified against. Can be left empty for no validation.
     * @type {string}
     * @memberof DockerServiceConnectionRequest
     */
    tls_verification?: string | null;
    /**
     * Certificate/Key used for authentication. Can be left empty for no authentication.
     * @type {string}
     * @memberof DockerServiceConnectionRequest
     */
    tls_authentication?: string | null;
}
