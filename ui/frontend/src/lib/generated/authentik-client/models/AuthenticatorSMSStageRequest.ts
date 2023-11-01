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
    AuthTypeEnum,
    FlowSetRequest,
    ProviderEnum,
} from './';

/**
 * AuthenticatorSMSStage Serializer
 * @export
 * @interface AuthenticatorSMSStageRequest
 */
export interface AuthenticatorSMSStageRequest {
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    name: string;
    /**
     * @type {Array<FlowSetRequest>}
     * @memberof AuthenticatorSMSStageRequest
     */
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    configure_flow?: string | null;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    friendly_name?: string | null;
    /**
     * @type {ProviderEnum}
     * @memberof AuthenticatorSMSStageRequest
     */
    provider: ProviderEnum;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    from_number: string;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    account_sid: string;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    auth: string;
    /**
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    auth_password?: string;
    /**
     * @type {AuthTypeEnum}
     * @memberof AuthenticatorSMSStageRequest
     */
    auth_type?: AuthTypeEnum;
    /**
     * When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future.
     * @type {boolean}
     * @memberof AuthenticatorSMSStageRequest
     */
    verify_only?: boolean;
    /**
     * Optionally modify the payload being sent to custom providers.
     * @type {string}
     * @memberof AuthenticatorSMSStageRequest
     */
    mapping?: string | null;
}

