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
    EventActions,
} from './';

/**
 * Event Serializer
 * @export
 * @interface PatchedEventRequest
 */
export interface PatchedEventRequest {
    /**
     * @type {{ [key: string]: any; }}
     * @memberof PatchedEventRequest
     */
    user?: { [key: string]: any; };
    /**
     * @type {EventActions}
     * @memberof PatchedEventRequest
     */
    action?: EventActions;
    /**
     * @type {string}
     * @memberof PatchedEventRequest
     */
    app?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof PatchedEventRequest
     */
    context?: { [key: string]: any; };
    /**
     * @type {string}
     * @memberof PatchedEventRequest
     */
    client_ip?: string | null;
    /**
     * @type {string}
     * @memberof PatchedEventRequest
     */
    expires?: string;
    /**
     * @type {{ [key: string]: any; }}
     * @memberof PatchedEventRequest
     */
    tenant?: { [key: string]: any; };
}


