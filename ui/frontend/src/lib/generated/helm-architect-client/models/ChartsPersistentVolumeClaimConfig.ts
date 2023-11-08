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
 * @interface ChartsPersistentVolumeClaimConfig
 */
export interface ChartsPersistentVolumeClaimConfig {
    /**
     * @type {Array<string>}
     * @memberof ChartsPersistentVolumeClaimConfig
     */
    accessModes?: Array<string>;
    /**
     * @type {string}
     * @memberof ChartsPersistentVolumeClaimConfig
     */
    name?: string;
    /**
     * @type {string}
     * @memberof ChartsPersistentVolumeClaimConfig
     */
    size?: string;
    /**
     * @type {string}
     * @memberof ChartsPersistentVolumeClaimConfig
     */
    storageClassName?: string;
}
