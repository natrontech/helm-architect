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
    SystemRuntime,
} from './';

/**
 * Get system information.
 * @export
 * @interface System
 */
export interface System {
    /**
     * Get HTTP Request headers
     * @type {{ [key: string]: string; }}
     * @memberof System
     */
    readonly http_headers: { [key: string]: string; };
    /**
     * Get HTTP host
     * @type {string}
     * @memberof System
     */
    readonly http_host: string;
    /**
     * Get HTTP Secure flag
     * @type {boolean}
     * @memberof System
     */
    readonly http_is_secure: boolean;
    /**
     * @type {SystemRuntime}
     * @memberof System
     */
    runtime: SystemRuntime;
    /**
     * Currently active tenant
     * @type {string}
     * @memberof System
     */
    readonly tenant: string;
    /**
     * Current server time
     * @type {string}
     * @memberof System
     */
    readonly server_time: string;
    /**
     * Get the FQDN configured on the embedded outpost
     * @type {string}
     * @memberof System
     */
    readonly embedded_outpost_host: string;
}