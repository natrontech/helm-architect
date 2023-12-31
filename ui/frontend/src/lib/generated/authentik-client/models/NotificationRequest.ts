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
    EventRequest,
} from './';

/**
 * Notification Serializer
 * @export
 * @interface NotificationRequest
 */
export interface NotificationRequest {
    /**
     * @type {EventRequest}
     * @memberof NotificationRequest
     */
    event?: EventRequest;
    /**
     * @type {boolean}
     * @memberof NotificationRequest
     */
    seen?: boolean;
}
