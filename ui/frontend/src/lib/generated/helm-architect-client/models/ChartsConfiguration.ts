// tslint:disable
/**
 * Helm Architect Core API
 * The helm architect api serves the core features of the helm architect.
 *
 * The version of the OpenAPI document: alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    ChartsComponentConfig,
    ChartsGlobalConfig,
    ChartsIngressConfig,
    ChartsNetworkPolicyConfig,
    ChartsPersistentVolumeClaimConfig,
    ChartsSecretsConfig,
    ChartsServiceMonitorConfig,
} from './';

/**
 * @export
 * @interface ChartsConfiguration
 */
export interface ChartsConfiguration {
    /**
     * @type {{ [key: string]: ChartsComponentConfig; }}
     * @memberof ChartsConfiguration
     */
    components?: { [key: string]: ChartsComponentConfig; };
    /**
     * @type {string}
     * @memberof ChartsConfiguration
     */
    defaultTag?: string;
    /**
     * @type {ChartsGlobalConfig}
     * @memberof ChartsConfiguration
     */
    global?: ChartsGlobalConfig;
    /**
     * @type {ChartsIngressConfig}
     * @memberof ChartsConfiguration
     */
    ingress?: ChartsIngressConfig;
    /**
     * @type {string}
     * @memberof ChartsConfiguration
     */
    nameOverride?: string;
    /**
     * @type {string}
     * @memberof ChartsConfiguration
     */
    namePrefix?: string;
    /**
     * @type {string}
     * @memberof ChartsConfiguration
     */
    nameSuffix?: string;
    /**
     * @type {ChartsNetworkPolicyConfig}
     * @memberof ChartsConfiguration
     */
    networkPolicy?: ChartsNetworkPolicyConfig;
    /**
     * @type {Array<ChartsPersistentVolumeClaimConfig>}
     * @memberof ChartsConfiguration
     */
    persistentVolumeClaims?: Array<ChartsPersistentVolumeClaimConfig>;
    /**
     * @type {ChartsSecretsConfig}
     * @memberof ChartsConfiguration
     */
    secrets?: ChartsSecretsConfig;
    /**
     * @type {ChartsServiceMonitorConfig}
     * @memberof ChartsConfiguration
     */
    serviceMonitor?: ChartsServiceMonitorConfig;
    /**
     * @type {string}
     * @memberof ChartsConfiguration
     */
    timezone?: string;
}