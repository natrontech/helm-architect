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
    ChartsBackendConfig,
} from './';

/**
 * @export
 * @interface ChartsHTTPPathConfig
 */
export interface ChartsHTTPPathConfig {
    /**
     * @type {ChartsBackendConfig}
     * @memberof ChartsHTTPPathConfig
     */
    backend?: ChartsBackendConfig;
    /**
     * @type {string}
     * @memberof ChartsHTTPPathConfig
     */
    path?: string;
    /**
     * @type {string}
     * @memberof ChartsHTTPPathConfig
     */
    pathType?: string;
}
