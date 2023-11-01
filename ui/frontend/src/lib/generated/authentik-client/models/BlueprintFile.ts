// tslint:disable
/**
 * authentik
 * Making authentication simple.
 *
 * The version of the OpenAPI document: 2023.10.2
 * Contact: hello@goauthentik.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    Metadata,
} from './';

/**
 * @export
 * @interface BlueprintFile
 */
export interface BlueprintFile {
    /**
     * @type {string}
     * @memberof BlueprintFile
     */
    path: string;
    /**
     * @type {string}
     * @memberof BlueprintFile
     */
    last_m: string;
    /**
     * @type {string}
     * @memberof BlueprintFile
     */
    hash: string;
    /**
     * @type {Metadata}
     * @memberof BlueprintFile
     */
    readonly meta: Metadata;
}