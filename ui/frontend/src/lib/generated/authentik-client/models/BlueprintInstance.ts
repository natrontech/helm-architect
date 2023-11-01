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
    BlueprintInstanceStatusEnum,
} from './';

/**
 * Info about a single blueprint instance file
 * @export
 * @interface BlueprintInstance
 */
export interface BlueprintInstance {
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    name: string;
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    path?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof BlueprintInstance
     */
    context?: { [key: string]: any; };
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    readonly last_applied: string;
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    readonly last_applied_hash: string;
    /**
     * @type {BlueprintInstanceStatusEnum}
     * @memberof BlueprintInstance
     */
    readonly status: BlueprintInstanceStatusEnum;
    /**
     * @type {boolean}
     * @memberof BlueprintInstance
     */
    enabled?: boolean;
    /**
     * @type {Array<string>}
     * @memberof BlueprintInstance
     */
    readonly managed_models: Array<string>;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof BlueprintInstance
     */
    readonly metadata: { [key: string]: any; };
    /**
     * @type {string}
     * @memberof BlueprintInstance
     */
    content?: string;
}

