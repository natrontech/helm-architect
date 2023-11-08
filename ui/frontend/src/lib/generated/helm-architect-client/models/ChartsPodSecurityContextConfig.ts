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
    ChartsSeLinuxOptionsConfig,
    ChartsSecurityContextConfig,
    ChartsWindowsOptionsConfig,
} from './';

/**
 * @export
 * @interface ChartsPodSecurityContextConfig
 */
export interface ChartsPodSecurityContextConfig {
    /**
     * @type {number}
     * @memberof ChartsPodSecurityContextConfig
     */
    fsGroup?: number;
    /**
     * @type {number}
     * @memberof ChartsPodSecurityContextConfig
     */
    runAsGroup?: number;
    /**
     * @type {boolean}
     * @memberof ChartsPodSecurityContextConfig
     */
    runAsNonRoot?: boolean;
    /**
     * @type {number}
     * @memberof ChartsPodSecurityContextConfig
     */
    runAsNonRootUid?: number;
    /**
     * @type {number}
     * @memberof ChartsPodSecurityContextConfig
     */
    runAsUser?: number;
    /**
     * @type {string}
     * @memberof ChartsPodSecurityContextConfig
     */
    runAsUsername?: string;
    /**
     * @type {ChartsSeLinuxOptionsConfig}
     * @memberof ChartsPodSecurityContextConfig
     */
    seLinuxOptions?: ChartsSeLinuxOptionsConfig;
    /**
     * @type {ChartsSecurityContextConfig}
     * @memberof ChartsPodSecurityContextConfig
     */
    securityContext?: ChartsSecurityContextConfig;
    /**
     * @type {Array<number>}
     * @memberof ChartsPodSecurityContextConfig
     */
    supplementalGroups?: Array<number>;
    /**
     * @type {Array<string>}
     * @memberof ChartsPodSecurityContextConfig
     */
    sysctls?: Array<string>;
    /**
     * @type {ChartsWindowsOptionsConfig}
     * @memberof ChartsPodSecurityContextConfig
     */
    windowsOptions?: ChartsWindowsOptionsConfig;
}
