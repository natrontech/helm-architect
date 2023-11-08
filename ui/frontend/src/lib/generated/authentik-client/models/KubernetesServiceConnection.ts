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
 * KubernetesServiceConnection Serializer
 * @export
 * @interface KubernetesServiceConnection
 */
export interface KubernetesServiceConnection {
    /**
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     * @type {boolean}
     * @memberof KubernetesServiceConnection
     */
    local?: boolean;
    /**
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof KubernetesServiceConnection
     */
    readonly meta_model_name: string;
    /**
     * Paste your kubeconfig here. authentik will automatically use the currently selected context.
     * @type {{ [key: string]: any; }}
     * @memberof KubernetesServiceConnection
     */
    kubeconfig?: { [key: string]: any; };
    /**
     * Verify SSL Certificates of the Kubernetes API endpoint
     * @type {boolean}
     * @memberof KubernetesServiceConnection
     */
    verify_ssl?: boolean;
}
