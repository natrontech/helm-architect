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
 * @interface PlexSource
 */
export interface PlexSource {
    /**
     * @type {string}
     * @memberof PlexSource
     */
    readonly pk: string;
    /**
     * Source\'s display Name.
     * @type {string}
     * @memberof PlexSource
     */
    name: string;
    /**
     * Internal source name, used in URLs.
     * @type {string}
     * @memberof PlexSource
     */
    slug: string;
    /**
     * @type {boolean}
     * @memberof PlexSource
     */
    enabled?: boolean;
    /**
     * Flow to use when authenticating existing users.
     * @type {string}
     * @memberof PlexSource
     */
    authentication_flow?: string | null;
    /**
     * Flow to use when enrolling new users.
     * @type {string}
     * @memberof PlexSource
     */
    enrollment_flow?: string | null;
    /**
     * Get object component so that we know how to edit the object
     * @type {string}
     * @memberof PlexSource
     */
    readonly component: string;
    /**
     * Return object\'s verbose_name
     * @type {string}
     * @memberof PlexSource
     */
    readonly verbose_name: string;
    /**
     * Return object\'s plural verbose_name
     * @type {string}
     * @memberof PlexSource
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     * @type {string}
     * @memberof PlexSource
     */
    readonly meta_model_name: string;
    /**
     * @type {PolicyEngineMode}
     * @memberof PlexSource
     */
    policy_engine_mode?: PolicyEngineMode;
    /**
     * @type {UserMatchingModeEnum}
     * @memberof PlexSource
     */
    user_matching_mode?: UserMatchingModeEnum;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     * @type {string}
     * @memberof PlexSource
     */
    readonly managed: string | null;
    /**
     * @type {string}
     * @memberof PlexSource
     */
    user_path_template?: string;
    /**
     * Get the URL to the Icon. If the name is /static or starts with http it is returned as-is
     * @type {string}
     * @memberof PlexSource
     */
    readonly icon: string | null;
    /**
     * Client identifier used to talk to Plex.
     * @type {string}
     * @memberof PlexSource
     */
    client_id?: string;
    /**
     * Which servers a user has to be a member of to be granted access. Empty list allows every server.
     * @type {Array<string>}
     * @memberof PlexSource
     */
    allowed_servers?: Array<string>;
    /**
     * Allow friends to authenticate, even if you don\'t share a server.
     * @type {boolean}
     * @memberof PlexSource
     */
    allow_friends?: boolean;
    /**
     * Plex token used to check friends
     * @type {string}
     * @memberof PlexSource
     */
    plex_token: string;
}


