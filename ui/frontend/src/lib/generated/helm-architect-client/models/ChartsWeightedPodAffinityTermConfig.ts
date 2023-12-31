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
    ChartsPodAffinityTermConfig,
} from './';

/**
 * @export
 * @interface ChartsWeightedPodAffinityTermConfig
 */
export interface ChartsWeightedPodAffinityTermConfig {
    /**
     * @type {ChartsPodAffinityTermConfig}
     * @memberof ChartsWeightedPodAffinityTermConfig
     */
    podAffinityTerm?: ChartsPodAffinityTermConfig;
    /**
     * @type {number}
     * @memberof ChartsWeightedPodAffinityTermConfig
     */
    weight?: number;
}
