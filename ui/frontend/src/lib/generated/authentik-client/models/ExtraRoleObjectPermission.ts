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

/**
 * User permission with additional object-related data
 * @export
 * @interface ExtraRoleObjectPermission
 */
export interface ExtraRoleObjectPermission {
    /**
     * @type {number}
     * @memberof ExtraRoleObjectPermission
     */
    readonly id: number;
    /**
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly codename: string;
    /**
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly model: string;
    /**
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly app_label: string;
    /**
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly object_pk: string;
    /**
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly name: string;
    /**
     * Get app label from permission\'s model
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly app_label_verbose: string;
    /**
     * Get model label from permission\'s model
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly model_verbose: string;
    /**
     * Get model description from attached model. This operation takes at least one additional query, and the description is only shown if the user/role has the view_ permission on the object
     * @type {string}
     * @memberof ExtraRoleObjectPermission
     */
    readonly object_description: string | null;
}
