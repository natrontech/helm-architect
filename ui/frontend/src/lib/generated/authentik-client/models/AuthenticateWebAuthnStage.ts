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
    AuthenticatorAttachmentEnum,
    FlowSet,
    ResidentKeyRequirementEnum,
    UserVerificationEnum,
} from './';

/**
 * AuthenticateWebAuthnStage Serializer
 * @export
 * @interface AuthenticateWebAuthnStage
 */
export interface AuthenticateWebAuthnStage {
    /**
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    readonly pk: string;
    /**
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    name: string;
    /**
     * Get object type so that we know how to edit the object
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    readonly meta_model_name: string;
    /**
     * @type {Array<FlowSet>}
     * @memberof AuthenticateWebAuthnStage
     */
    flow_set?: Array<FlowSet>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticateWebAuthnStage
     */
    friendly_name?: string | null;
    /**
     * @type {UserVerificationEnum}
     * @memberof AuthenticateWebAuthnStage
     */
    user_verification?: UserVerificationEnum;
    /**
     * @type {AuthenticatorAttachmentEnum}
     * @memberof AuthenticateWebAuthnStage
     */
    authenticator_attachment?: AuthenticatorAttachmentEnum | null;
    /**
     * @type {ResidentKeyRequirementEnum}
     * @memberof AuthenticateWebAuthnStage
     */
    resident_key_requirement?: ResidentKeyRequirementEnum;
}


