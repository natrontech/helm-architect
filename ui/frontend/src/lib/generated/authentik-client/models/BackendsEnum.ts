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
 * * `authentik.core.auth.InbuiltBackend` - User database + standard password * `authentik.core.auth.TokenBackend` - User database + app passwords * `authentik.sources.ldap.auth.LDAPBackend` - User database + LDAP password
 * @export
 * @enum {string}
 */
export enum BackendsEnum {
    CoreAuthInbuiltBackend = 'authentik.core.auth.InbuiltBackend',
    CoreAuthTokenBackend = 'authentik.core.auth.TokenBackend',
    SourcesLdapAuthLdapBackend = 'authentik.sources.ldap.auth.LDAPBackend'
}

