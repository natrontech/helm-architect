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
    ChartsLabelSelectorRequirementConfig,
} from './';

/**
 * @export
 * @interface ChartsLabelSelectorConfig
 */
export interface ChartsLabelSelectorConfig {
    /**
     * @type {Array<ChartsLabelSelectorRequirementConfig>}
     * @memberof ChartsLabelSelectorConfig
     */
    matchExpressions?: Array<ChartsLabelSelectorRequirementConfig>;
    /**
     * @type {{ [key: string]: string; }}
     * @memberof ChartsLabelSelectorConfig
     */
    matchLabels?: { [key: string]: string; };
}
