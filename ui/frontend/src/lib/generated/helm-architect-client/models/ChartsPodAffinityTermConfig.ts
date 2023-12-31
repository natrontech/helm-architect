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
    ChartsLabelSelectorConfig,
} from './';

/**
 * @export
 * @interface ChartsPodAffinityTermConfig
 */
export interface ChartsPodAffinityTermConfig {
    /**
     * @type {ChartsLabelSelectorConfig}
     * @memberof ChartsPodAffinityTermConfig
     */
    labelSelector?: ChartsLabelSelectorConfig;
    /**
     * @type {string}
     * @memberof ChartsPodAffinityTermConfig
     */
    topologyKey?: string;
}
