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
 * @interface ChartsResourcesConfig
 */
export interface ChartsResourcesConfig {
    /**
     * @type {{ [key: string]: string; }}
     * @memberof ChartsResourcesConfig
     */
    limits?: { [key: string]: string; };
    /**
     * @type {{ [key: string]: string; }}
     * @memberof ChartsResourcesConfig
     */
    requests?: { [key: string]: string; };
}
