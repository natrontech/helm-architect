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
 * @interface DockerServiceConnection
 */
export interface DockerServiceConnection {
    /**
     * @type {string}
     * @memberof DockerServiceConnection
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof DockerServiceConnection
     */
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     * @type {boolean}
     * @memberof DockerServiceConnection
     */
    local?: boolean;
    /**
     * @type {string}
     * @memberof DockerServiceConnection
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof DockerServiceConnection
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof DockerServiceConnection
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof DockerServiceConnection
     */
    readonly meta_model_name: string;
    /**
     * Can be in the format of \'unix://<path>\' when connecting to a local docker daemon, or \'https://<hostname>:2376\' when connecting to a remote system.
     * @type {string}
     * @memberof DockerServiceConnection
     */
    url: string;
    /**
     * CA which the endpoint\'s Certificate is verified against. Can be left empty for no validation.
     * @type {string}
     * @memberof DockerServiceConnection
     */
    tls_verification?: string | null;
    /**
     * Certificate/Key used for authentication. Can be left empty for no authentication.
     * @type {string}
     * @memberof DockerServiceConnection
     */
    tls_authentication?: string | null;
}
