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
    Group,
    SeverityEnum,
} from './';

/**
 * NotificationRule Serializer
 * @export
 * @interface NotificationRule
 */
export interface NotificationRule {
    /**
     * @type {string}
     * @memberof NotificationRule
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof NotificationRule
     */
    name: string;
    /**
     * Select which transports should be used to notify the user. If none are selected, the notification will only be shown in the authentik UI.
     * @type {Array<string>}
     * @memberof NotificationRule
     */
    transports?: Array<string>;
    /**
     * @type {SeverityEnum}
     * @memberof NotificationRule
     */
    severity?: SeverityEnum;
    /**
     * Define which group of users this notification should be sent and shown to. If left empty, Notification won\'t ben sent.
     * @type {string}
     * @memberof NotificationRule
     */
    group?: string | null;
    /**
     * @type {Group}
     * @memberof NotificationRule
     */
    readonly group_obj: Group;
}


