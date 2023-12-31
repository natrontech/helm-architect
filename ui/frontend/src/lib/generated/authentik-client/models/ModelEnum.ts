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
 * * `authentik_crypto.certificatekeypair` - Certificate-Key Pair * `authentik_events.event` - Event * `authentik_events.notificationtransport` - Notification Transport * `authentik_events.notification` - Notification * `authentik_events.notificationrule` - Notification Rule * `authentik_events.notificationwebhookmapping` - Webhook Mapping * `authentik_flows.flow` - Flow * `authentik_flows.flowstagebinding` - Flow Stage Binding * `authentik_outposts.dockerserviceconnection` - Docker Service-Connection * `authentik_outposts.kubernetesserviceconnection` - Kubernetes Service-Connection * `authentik_outposts.outpost` - Outpost * `authentik_policies_dummy.dummypolicy` - Dummy Policy * `authentik_policies_event_matcher.eventmatcherpolicy` - Event Matcher Policy * `authentik_policies_expiry.passwordexpirypolicy` - Password Expiry Policy * `authentik_policies_expression.expressionpolicy` - Expression Policy * `authentik_policies_password.passwordpolicy` - Password Policy * `authentik_policies_reputation.reputationpolicy` - Reputation Policy * `authentik_policies_reputation.reputation` - Reputation Score * `authentik_policies.policybinding` - Policy Binding * `authentik_providers_ldap.ldapprovider` - LDAP Provider * `authentik_providers_oauth2.scopemapping` - Scope Mapping * `authentik_providers_oauth2.oauth2provider` - OAuth2/OpenID Provider * `authentik_providers_oauth2.authorizationcode` - Authorization Code * `authentik_providers_oauth2.accesstoken` - OAuth2 Access Token * `authentik_providers_oauth2.refreshtoken` - OAuth2 Refresh Token * `authentik_providers_proxy.proxyprovider` - Proxy Provider * `authentik_providers_radius.radiusprovider` - Radius Provider * `authentik_providers_saml.samlprovider` - SAML Provider * `authentik_providers_saml.samlpropertymapping` - SAML Property Mapping * `authentik_providers_scim.scimprovider` - SCIM Provider * `authentik_providers_scim.scimmapping` - SCIM Mapping * `authentik_rbac.role` - Role * `authentik_sources_ldap.ldapsource` - LDAP Source * `authentik_sources_ldap.ldappropertymapping` - LDAP Property Mapping * `authentik_sources_oauth.oauthsource` - OAuth Source * `authentik_sources_oauth.useroauthsourceconnection` - User OAuth Source Connection * `authentik_sources_plex.plexsource` - Plex Source * `authentik_sources_plex.plexsourceconnection` - User Plex Source Connection * `authentik_sources_saml.samlsource` - SAML Source * `authentik_sources_saml.usersamlsourceconnection` - User SAML Source Connection * `authentik_stages_authenticator_duo.authenticatorduostage` - Duo Authenticator Setup Stage * `authentik_stages_authenticator_duo.duodevice` - Duo Device * `authentik_stages_authenticator_sms.authenticatorsmsstage` - SMS Authenticator Setup Stage * `authentik_stages_authenticator_sms.smsdevice` - SMS Device * `authentik_stages_authenticator_static.authenticatorstaticstage` - Static Authenticator Stage * `authentik_stages_authenticator_static.staticdevice` - Static Device * `authentik_stages_authenticator_totp.authenticatortotpstage` - TOTP Authenticator Setup Stage * `authentik_stages_authenticator_totp.totpdevice` - TOTP Device * `authentik_stages_authenticator_validate.authenticatorvalidatestage` - Authenticator Validation Stage * `authentik_stages_authenticator_webauthn.authenticatewebauthnstage` - WebAuthn Authenticator Setup Stage * `authentik_stages_authenticator_webauthn.webauthndevice` - WebAuthn Device * `authentik_stages_captcha.captchastage` - Captcha Stage * `authentik_stages_consent.consentstage` - Consent Stage * `authentik_stages_consent.userconsent` - User Consent * `authentik_stages_deny.denystage` - Deny Stage * `authentik_stages_dummy.dummystage` - Dummy Stage * `authentik_stages_email.emailstage` - Email Stage * `authentik_stages_identification.identificationstage` - Identification Stage * `authentik_stages_invitation.invitationstage` - Invitation Stage * `authentik_stages_invitation.invitation` - Invitation * `authentik_stages_password.passwordstage` - Password Stage * `authentik_stages_prompt.prompt` - Prompt * `authentik_stages_prompt.promptstage` - Prompt Stage * `authentik_stages_user_delete.userdeletestage` - User Delete Stage * `authentik_stages_user_login.userloginstage` - User Login Stage * `authentik_stages_user_logout.userlogoutstage` - User Logout Stage * `authentik_stages_user_write.userwritestage` - User Write Stage * `authentik_tenants.tenant` - Tenant * `authentik_blueprints.blueprintinstance` - Blueprint Instance * `authentik_core.group` - Group * `authentik_core.user` - User * `authentik_core.application` - Application * `authentik_core.token` - Token * `authentik_enterprise.license` - License
 * @export
 * @enum {string}
 */
export enum ModelEnum {
    CryptoCertificatekeypair = 'authentik_crypto.certificatekeypair',
    EventsEvent = 'authentik_events.event',
    EventsNotificationtransport = 'authentik_events.notificationtransport',
    EventsNotification = 'authentik_events.notification',
    EventsNotificationrule = 'authentik_events.notificationrule',
    EventsNotificationwebhookmapping = 'authentik_events.notificationwebhookmapping',
    FlowsFlow = 'authentik_flows.flow',
    FlowsFlowstagebinding = 'authentik_flows.flowstagebinding',
    OutpostsDockerserviceconnection = 'authentik_outposts.dockerserviceconnection',
    OutpostsKubernetesserviceconnection = 'authentik_outposts.kubernetesserviceconnection',
    OutpostsOutpost = 'authentik_outposts.outpost',
    PoliciesDummyDummypolicy = 'authentik_policies_dummy.dummypolicy',
    PoliciesEventMatcherEventmatcherpolicy = 'authentik_policies_event_matcher.eventmatcherpolicy',
    PoliciesExpiryPasswordexpirypolicy = 'authentik_policies_expiry.passwordexpirypolicy',
    PoliciesExpressionExpressionpolicy = 'authentik_policies_expression.expressionpolicy',
    PoliciesPasswordPasswordpolicy = 'authentik_policies_password.passwordpolicy',
    PoliciesReputationReputationpolicy = 'authentik_policies_reputation.reputationpolicy',
    PoliciesReputationReputation = 'authentik_policies_reputation.reputation',
    PoliciesPolicybinding = 'authentik_policies.policybinding',
    ProvidersLdapLdapprovider = 'authentik_providers_ldap.ldapprovider',
    ProvidersOauth2Scopemapping = 'authentik_providers_oauth2.scopemapping',
    ProvidersOauth2Oauth2provider = 'authentik_providers_oauth2.oauth2provider',
    ProvidersOauth2Authorizationcode = 'authentik_providers_oauth2.authorizationcode',
    ProvidersOauth2Accesstoken = 'authentik_providers_oauth2.accesstoken',
    ProvidersOauth2Refreshtoken = 'authentik_providers_oauth2.refreshtoken',
    ProvidersProxyProxyprovider = 'authentik_providers_proxy.proxyprovider',
    ProvidersRadiusRadiusprovider = 'authentik_providers_radius.radiusprovider',
    ProvidersSamlSamlprovider = 'authentik_providers_saml.samlprovider',
    ProvidersSamlSamlpropertymapping = 'authentik_providers_saml.samlpropertymapping',
    ProvidersScimScimprovider = 'authentik_providers_scim.scimprovider',
    ProvidersScimScimmapping = 'authentik_providers_scim.scimmapping',
    RbacRole = 'authentik_rbac.role',
    SourcesLdapLdapsource = 'authentik_sources_ldap.ldapsource',
    SourcesLdapLdappropertymapping = 'authentik_sources_ldap.ldappropertymapping',
    SourcesOauthOauthsource = 'authentik_sources_oauth.oauthsource',
    SourcesOauthUseroauthsourceconnection = 'authentik_sources_oauth.useroauthsourceconnection',
    SourcesPlexPlexsource = 'authentik_sources_plex.plexsource',
    SourcesPlexPlexsourceconnection = 'authentik_sources_plex.plexsourceconnection',
    SourcesSamlSamlsource = 'authentik_sources_saml.samlsource',
    SourcesSamlUsersamlsourceconnection = 'authentik_sources_saml.usersamlsourceconnection',
    StagesAuthenticatorDuoAuthenticatorduostage = 'authentik_stages_authenticator_duo.authenticatorduostage',
    StagesAuthenticatorDuoDuodevice = 'authentik_stages_authenticator_duo.duodevice',
    StagesAuthenticatorSmsAuthenticatorsmsstage = 'authentik_stages_authenticator_sms.authenticatorsmsstage',
    StagesAuthenticatorSmsSmsdevice = 'authentik_stages_authenticator_sms.smsdevice',
    StagesAuthenticatorStaticAuthenticatorstaticstage = 'authentik_stages_authenticator_static.authenticatorstaticstage',
    StagesAuthenticatorStaticStaticdevice = 'authentik_stages_authenticator_static.staticdevice',
    StagesAuthenticatorTotpAuthenticatortotpstage = 'authentik_stages_authenticator_totp.authenticatortotpstage',
    StagesAuthenticatorTotpTotpdevice = 'authentik_stages_authenticator_totp.totpdevice',
    StagesAuthenticatorValidateAuthenticatorvalidatestage = 'authentik_stages_authenticator_validate.authenticatorvalidatestage',
    StagesAuthenticatorWebauthnAuthenticatewebauthnstage = 'authentik_stages_authenticator_webauthn.authenticatewebauthnstage',
    StagesAuthenticatorWebauthnWebauthndevice = 'authentik_stages_authenticator_webauthn.webauthndevice',
    StagesCaptchaCaptchastage = 'authentik_stages_captcha.captchastage',
    StagesConsentConsentstage = 'authentik_stages_consent.consentstage',
    StagesConsentUserconsent = 'authentik_stages_consent.userconsent',
    StagesDenyDenystage = 'authentik_stages_deny.denystage',
    StagesDummyDummystage = 'authentik_stages_dummy.dummystage',
    StagesEmailEmailstage = 'authentik_stages_email.emailstage',
    StagesIdentificationIdentificationstage = 'authentik_stages_identification.identificationstage',
    StagesInvitationInvitationstage = 'authentik_stages_invitation.invitationstage',
    StagesInvitationInvitation = 'authentik_stages_invitation.invitation',
    StagesPasswordPasswordstage = 'authentik_stages_password.passwordstage',
    StagesPromptPrompt = 'authentik_stages_prompt.prompt',
    StagesPromptPromptstage = 'authentik_stages_prompt.promptstage',
    StagesUserDeleteUserdeletestage = 'authentik_stages_user_delete.userdeletestage',
    StagesUserLoginUserloginstage = 'authentik_stages_user_login.userloginstage',
    StagesUserLogoutUserlogoutstage = 'authentik_stages_user_logout.userlogoutstage',
    StagesUserWriteUserwritestage = 'authentik_stages_user_write.userwritestage',
    TenantsTenant = 'authentik_tenants.tenant',
    BlueprintsBlueprintinstance = 'authentik_blueprints.blueprintinstance',
    CoreGroup = 'authentik_core.group',
    CoreUser = 'authentik_core.user',
    CoreApplication = 'authentik_core.application',
    CoreToken = 'authentik_core.token',
    EnterpriseLicense = 'authentik_enterprise.license'
}

