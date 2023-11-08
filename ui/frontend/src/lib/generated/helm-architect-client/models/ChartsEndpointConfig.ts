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

/**
 * @export
 * @interface ChartsEndpointConfig
 */
export interface ChartsEndpointConfig {
    /**
     * @type {{ [key: string]: string; }}
     * @memberof ChartsEndpointConfig
     */
    componentSelector?: { [key: string]: string; };
    /**
     * @type {number}
     * @memberof ChartsEndpointConfig
     */
    headlessTargetPort?: number;
    /**
     * @type {string}
     * @memberof ChartsEndpointConfig
     */
    interval?: string;
    /**
     * @type {string}
     * @memberof ChartsEndpointConfig
     */
    overridePasswordKey?: string;
    /**
     * @type {string}
     * @memberof ChartsEndpointConfig
     */
    overrideUserKey?: string;
    /**
     * @type {string}
     * @memberof ChartsEndpointConfig
     */
    path?: string;
    /**
     * @type {string}
     * @memberof ChartsEndpointConfig
     */
    port?: string;
}
