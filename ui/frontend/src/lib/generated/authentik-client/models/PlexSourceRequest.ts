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
    PolicyEngineMode,
    UserMatchingModeEnum,
} from './';

/**
 * Plex Source Serializer
 * @export
 * @interface PlexSourceRequest
 */
export interface PlexSourceRequest {
    /**
     * Source\'s display Name.
     * @type {string}
     * @memberof PlexSourceRequest
     */
    name: string;
    /**
     * Internal source name, used in URLs.
     * @type {string}
     * @memberof PlexSourceRequest
     */
    slug: string;
    /**
     * @type {boolean}
     * @memberof PlexSourceRequest
     */
    enabled?: boolean;
    /**
     * Flow to use when authenticating existing users.
     * @type {string}
     * @memberof PlexSourceRequest
     */
    authentication_flow?: string | null;
    /**
     * Flow to use when enrolling new users.
     * @type {string}
     * @memberof PlexSourceRequest
     */
    enrollment_flow?: string | null;
    /**
     * @type {PolicyEngineMode}
     * @memberof PlexSourceRequest
     */
    policy_engine_mode?: PolicyEngineMode;
    /**
     * @type {UserMatchingModeEnum}
     * @memberof PlexSourceRequest
     */
    user_matching_mode?: UserMatchingModeEnum;
    /**
     * @type {string}
     * @memberof PlexSourceRequest
     */
    user_path_template?: string;
    /**
     * Client identifier used to talk to Plex.
     * @type {string}
     * @memberof PlexSourceRequest
     */
    client_id?: string;
    /**
     * Which servers a user has to be a member of to be granted access. Empty list allows every server.
     * @type {Array<string>}
     * @memberof PlexSourceRequest
     */
    allowed_servers?: Array<string>;
    /**
     * Allow friends to authenticate, even if you don\'t share a server.
     * @type {boolean}
     * @memberof PlexSourceRequest
     */
    allow_friends?: boolean;
    /**
     * Plex token used to check friends
     * @type {string}
     * @memberof PlexSourceRequest
     */
    plex_token: string;
}


