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
    ApplicationRequest,
    ModelRequest,
    ProviderModelEnum,
} from './';

/**
 * Serializer for creating a provider and an application in one transaction
 * @export
 * @interface TransactionApplicationRequest
 */
export interface TransactionApplicationRequest {
    /**
     * @type {ApplicationRequest}
     * @memberof TransactionApplicationRequest
     */
    app: ApplicationRequest;
    /**
     * @type {ProviderModelEnum}
     * @memberof TransactionApplicationRequest
     */
    provider_model: ProviderModelEnum;
    /**
     * @type {ModelRequest}
     * @memberof TransactionApplicationRequest
     */
    provider: ModelRequest;
}


