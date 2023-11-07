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
    FlowSetRequest,
    ResidentKeyRequirementEnum,
    UserVerificationEnum,
} from './';

/**
 * AuthenticateWebAuthnStage Serializer
 * @export
 * @interface PatchedAuthenticateWebAuthnStageRequest
 */
export interface PatchedAuthenticateWebAuthnStageRequest {
    /**
     * @type {string}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    name?: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {UserVerificationEnum}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    user_verification?: UserVerificationEnum;
    /**
     * @type {AuthenticatorAttachmentEnum}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    authenticator_attachment?: AuthenticatorAttachmentEnum | null;
    /**
     * @type {ResidentKeyRequirementEnum}
     * @memberof PatchedAuthenticateWebAuthnStageRequest
     */
    resident_key_requirement?: ResidentKeyRequirementEnum;
}


