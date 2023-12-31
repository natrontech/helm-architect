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
    ChartsDefaultBackendConfig,
    ChartsIngressRuleConfig,
    ChartsTLSConfig,
} from './';

/**
 * @export
 * @interface ChartsIngressConfig
 */
export interface ChartsIngressConfig {
    /**
     * @type {{ [key: string]: string; }}
     * @memberof ChartsIngressConfig
     */
    annotations?: { [key: string]: string; };
    /**
     * @type {ChartsDefaultBackendConfig}
     * @memberof ChartsIngressConfig
     */
    defaultBackend?: ChartsDefaultBackendConfig;
    /**
     * @type {boolean}
     * @memberof ChartsIngressConfig
     */
    deploy?: boolean;
    /**
     * @type {string}
     * @memberof ChartsIngressConfig
     */
    ingressClassName?: string;
    /**
     * @type {Array<ChartsIngressRuleConfig>}
     * @memberof ChartsIngressConfig
     */
    rules?: Array<ChartsIngressRuleConfig>;
    /**
     * @type {ChartsTLSConfig}
     * @memberof ChartsIngressConfig
     */
    tls?: ChartsTLSConfig;
}
