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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    GenericError,
    PaginatedExtraRoleObjectPermissionList,
    PaginatedExtraUserObjectPermissionList,
    PaginatedPermissionList,
    PaginatedRoleAssignedObjectPermissionList,
    PaginatedRoleList,
    PaginatedUserAssignedObjectPermissionList,
    PatchedPermissionAssignRequest,
    PatchedRoleRequest,
    Permission,
    PermissionAssignRequest,
    Role,
    RoleRequest,
    UsedBy,
    ValidationError,
} from '../models';

export interface RbacPermissionsAssignedByRolesAssignCreateRequest {
    uuid: string;
    permissionAssignRequest: PermissionAssignRequest;
}

export interface RbacPermissionsAssignedByRolesListRequest {
    model: RbacPermissionsAssignedByRolesListModelEnum;
    objectPk?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

export interface RbacPermissionsAssignedByRolesUnassignPartialUpdateRequest {
    uuid: string;
    patchedPermissionAssignRequest?: PatchedPermissionAssignRequest;
}

export interface RbacPermissionsAssignedByUsersAssignCreateRequest {
    id: number;
    permissionAssignRequest: PermissionAssignRequest;
}

export interface RbacPermissionsAssignedByUsersListRequest {
    model: RbacPermissionsAssignedByUsersListModelEnum;
    objectPk?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

export interface RbacPermissionsAssignedByUsersUnassignPartialUpdateRequest {
    id: number;
    patchedPermissionAssignRequest?: PatchedPermissionAssignRequest;
}

export interface RbacPermissionsListRequest {
    codename?: string;
    contentTypeAppLabel?: string;
    contentTypeModel?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    role?: string;
    search?: string;
    user?: number;
}

export interface RbacPermissionsRetrieveRequest {
    id: number;
}

export interface RbacPermissionsRolesListRequest {
    uuid: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

export interface RbacPermissionsUsersListRequest {
    userId: number;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

export interface RbacRolesCreateRequest {
    roleRequest: RoleRequest;
}

export interface RbacRolesDestroyRequest {
    uuid: string;
}

export interface RbacRolesListRequest {
    groupName?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

export interface RbacRolesPartialUpdateRequest {
    uuid: string;
    patchedRoleRequest?: PatchedRoleRequest;
}

export interface RbacRolesRetrieveRequest {
    uuid: string;
}

export interface RbacRolesUpdateRequest {
    uuid: string;
    roleRequest: RoleRequest;
}

export interface RbacRolesUsedByListRequest {
    uuid: string;
}

/**
 * no description
 */
export class RbacApi extends BaseAPI {

    /**
     * Assign permission(s) to role. When `object_pk` is set, the permissions are only assigned to the specific object, otherwise they are assigned globally.
     */
    rbacPermissionsAssignedByRolesAssignCreate({ uuid, permissionAssignRequest }: RbacPermissionsAssignedByRolesAssignCreateRequest): Observable<void>
    rbacPermissionsAssignedByRolesAssignCreate({ uuid, permissionAssignRequest }: RbacPermissionsAssignedByRolesAssignCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rbacPermissionsAssignedByRolesAssignCreate({ uuid, permissionAssignRequest }: RbacPermissionsAssignedByRolesAssignCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacPermissionsAssignedByRolesAssignCreate');
        throwIfNullOrUndefined(permissionAssignRequest, 'permissionAssignRequest', 'rbacPermissionsAssignedByRolesAssignCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/rbac/permissions/assigned_by_roles/{uuid}/assign/'.replace('{uuid}', encodeURI(uuid)),
            method: 'POST',
            headers,
            body: permissionAssignRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get assigned object permissions for a single object
     */
    rbacPermissionsAssignedByRolesList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByRolesListRequest): Observable<PaginatedRoleAssignedObjectPermissionList>
    rbacPermissionsAssignedByRolesList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByRolesListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedRoleAssignedObjectPermissionList>>
    rbacPermissionsAssignedByRolesList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByRolesListRequest, opts?: OperationOpts): Observable<PaginatedRoleAssignedObjectPermissionList | AjaxResponse<PaginatedRoleAssignedObjectPermissionList>> {
        throwIfNullOrUndefined(model, 'model', 'rbacPermissionsAssignedByRolesList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'model': model,
        };

        if (objectPk != null) { query['object_pk'] = objectPk; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }

        return this.request<PaginatedRoleAssignedObjectPermissionList>({
            url: '/rbac/permissions/assigned_by_roles/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Unassign permission(s) to role. When `object_pk` is set, the permissions are only assigned to the specific object, otherwise they are assigned globally.
     */
    rbacPermissionsAssignedByRolesUnassignPartialUpdate({ uuid, patchedPermissionAssignRequest }: RbacPermissionsAssignedByRolesUnassignPartialUpdateRequest): Observable<void>
    rbacPermissionsAssignedByRolesUnassignPartialUpdate({ uuid, patchedPermissionAssignRequest }: RbacPermissionsAssignedByRolesUnassignPartialUpdateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rbacPermissionsAssignedByRolesUnassignPartialUpdate({ uuid, patchedPermissionAssignRequest }: RbacPermissionsAssignedByRolesUnassignPartialUpdateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacPermissionsAssignedByRolesUnassignPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/rbac/permissions/assigned_by_roles/{uuid}/unassign/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: patchedPermissionAssignRequest,
        }, opts?.responseOpts);
    };

    /**
     * Assign permission(s) to user
     */
    rbacPermissionsAssignedByUsersAssignCreate({ id, permissionAssignRequest }: RbacPermissionsAssignedByUsersAssignCreateRequest): Observable<void>
    rbacPermissionsAssignedByUsersAssignCreate({ id, permissionAssignRequest }: RbacPermissionsAssignedByUsersAssignCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rbacPermissionsAssignedByUsersAssignCreate({ id, permissionAssignRequest }: RbacPermissionsAssignedByUsersAssignCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(id, 'id', 'rbacPermissionsAssignedByUsersAssignCreate');
        throwIfNullOrUndefined(permissionAssignRequest, 'permissionAssignRequest', 'rbacPermissionsAssignedByUsersAssignCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/rbac/permissions/assigned_by_users/{id}/assign/'.replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
            body: permissionAssignRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get assigned object permissions for a single object
     */
    rbacPermissionsAssignedByUsersList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByUsersListRequest): Observable<PaginatedUserAssignedObjectPermissionList>
    rbacPermissionsAssignedByUsersList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByUsersListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedUserAssignedObjectPermissionList>>
    rbacPermissionsAssignedByUsersList({ model, objectPk, ordering, page, pageSize, search }: RbacPermissionsAssignedByUsersListRequest, opts?: OperationOpts): Observable<PaginatedUserAssignedObjectPermissionList | AjaxResponse<PaginatedUserAssignedObjectPermissionList>> {
        throwIfNullOrUndefined(model, 'model', 'rbacPermissionsAssignedByUsersList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'model': model,
        };

        if (objectPk != null) { query['object_pk'] = objectPk; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }

        return this.request<PaginatedUserAssignedObjectPermissionList>({
            url: '/rbac/permissions/assigned_by_users/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Unassign permission(s) to user. When `object_pk` is set, the permissions are only assigned to the specific object, otherwise they are assigned globally.
     */
    rbacPermissionsAssignedByUsersUnassignPartialUpdate({ id, patchedPermissionAssignRequest }: RbacPermissionsAssignedByUsersUnassignPartialUpdateRequest): Observable<void>
    rbacPermissionsAssignedByUsersUnassignPartialUpdate({ id, patchedPermissionAssignRequest }: RbacPermissionsAssignedByUsersUnassignPartialUpdateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rbacPermissionsAssignedByUsersUnassignPartialUpdate({ id, patchedPermissionAssignRequest }: RbacPermissionsAssignedByUsersUnassignPartialUpdateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(id, 'id', 'rbacPermissionsAssignedByUsersUnassignPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/rbac/permissions/assigned_by_users/{id}/unassign/'.replace('{id}', encodeURI(id)),
            method: 'PATCH',
            headers,
            body: patchedPermissionAssignRequest,
        }, opts?.responseOpts);
    };

    /**
     * Read-only list of all permissions, filterable by model and app
     */
    rbacPermissionsList({ codename, contentTypeAppLabel, contentTypeModel, ordering, page, pageSize, role, search, user }: RbacPermissionsListRequest): Observable<PaginatedPermissionList>
    rbacPermissionsList({ codename, contentTypeAppLabel, contentTypeModel, ordering, page, pageSize, role, search, user }: RbacPermissionsListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedPermissionList>>
    rbacPermissionsList({ codename, contentTypeAppLabel, contentTypeModel, ordering, page, pageSize, role, search, user }: RbacPermissionsListRequest, opts?: OperationOpts): Observable<PaginatedPermissionList | AjaxResponse<PaginatedPermissionList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (codename != null) { query['codename'] = codename; }
        if (contentTypeAppLabel != null) { query['content_type__app_label'] = contentTypeAppLabel; }
        if (contentTypeModel != null) { query['content_type__model'] = contentTypeModel; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (role != null) { query['role'] = role; }
        if (search != null) { query['search'] = search; }
        if (user != null) { query['user'] = user; }

        return this.request<PaginatedPermissionList>({
            url: '/rbac/permissions/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Read-only list of all permissions, filterable by model and app
     */
    rbacPermissionsRetrieve({ id }: RbacPermissionsRetrieveRequest): Observable<Permission>
    rbacPermissionsRetrieve({ id }: RbacPermissionsRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<Permission>>
    rbacPermissionsRetrieve({ id }: RbacPermissionsRetrieveRequest, opts?: OperationOpts): Observable<Permission | AjaxResponse<Permission>> {
        throwIfNullOrUndefined(id, 'id', 'rbacPermissionsRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Permission>({
            url: '/rbac/permissions/{id}/'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a role\'s assigned object permissions
     */
    rbacPermissionsRolesList({ uuid, ordering, page, pageSize, search }: RbacPermissionsRolesListRequest): Observable<PaginatedExtraRoleObjectPermissionList>
    rbacPermissionsRolesList({ uuid, ordering, page, pageSize, search }: RbacPermissionsRolesListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedExtraRoleObjectPermissionList>>
    rbacPermissionsRolesList({ uuid, ordering, page, pageSize, search }: RbacPermissionsRolesListRequest, opts?: OperationOpts): Observable<PaginatedExtraRoleObjectPermissionList | AjaxResponse<PaginatedExtraRoleObjectPermissionList>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacPermissionsRolesList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'uuid': uuid,
        };

        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }

        return this.request<PaginatedExtraRoleObjectPermissionList>({
            url: '/rbac/permissions/roles/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Get a users\'s assigned object permissions
     */
    rbacPermissionsUsersList({ userId, ordering, page, pageSize, search }: RbacPermissionsUsersListRequest): Observable<PaginatedExtraUserObjectPermissionList>
    rbacPermissionsUsersList({ userId, ordering, page, pageSize, search }: RbacPermissionsUsersListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedExtraUserObjectPermissionList>>
    rbacPermissionsUsersList({ userId, ordering, page, pageSize, search }: RbacPermissionsUsersListRequest, opts?: OperationOpts): Observable<PaginatedExtraUserObjectPermissionList | AjaxResponse<PaginatedExtraUserObjectPermissionList>> {
        throwIfNullOrUndefined(userId, 'userId', 'rbacPermissionsUsersList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'user_id': userId,
        };

        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }

        return this.request<PaginatedExtraUserObjectPermissionList>({
            url: '/rbac/permissions/users/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesCreate({ roleRequest }: RbacRolesCreateRequest): Observable<Role>
    rbacRolesCreate({ roleRequest }: RbacRolesCreateRequest, opts?: OperationOpts): Observable<AjaxResponse<Role>>
    rbacRolesCreate({ roleRequest }: RbacRolesCreateRequest, opts?: OperationOpts): Observable<Role | AjaxResponse<Role>> {
        throwIfNullOrUndefined(roleRequest, 'roleRequest', 'rbacRolesCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Role>({
            url: '/rbac/roles/',
            method: 'POST',
            headers,
            body: roleRequest,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesDestroy({ uuid }: RbacRolesDestroyRequest): Observable<void>
    rbacRolesDestroy({ uuid }: RbacRolesDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    rbacRolesDestroy({ uuid }: RbacRolesDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacRolesDestroy');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/rbac/roles/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesList({ groupName, ordering, page, pageSize, search }: RbacRolesListRequest): Observable<PaginatedRoleList>
    rbacRolesList({ groupName, ordering, page, pageSize, search }: RbacRolesListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedRoleList>>
    rbacRolesList({ groupName, ordering, page, pageSize, search }: RbacRolesListRequest, opts?: OperationOpts): Observable<PaginatedRoleList | AjaxResponse<PaginatedRoleList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (groupName != null) { query['group__name'] = groupName; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }

        return this.request<PaginatedRoleList>({
            url: '/rbac/roles/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesPartialUpdate({ uuid, patchedRoleRequest }: RbacRolesPartialUpdateRequest): Observable<Role>
    rbacRolesPartialUpdate({ uuid, patchedRoleRequest }: RbacRolesPartialUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Role>>
    rbacRolesPartialUpdate({ uuid, patchedRoleRequest }: RbacRolesPartialUpdateRequest, opts?: OperationOpts): Observable<Role | AjaxResponse<Role>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacRolesPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Role>({
            url: '/rbac/roles/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: patchedRoleRequest,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesRetrieve({ uuid }: RbacRolesRetrieveRequest): Observable<Role>
    rbacRolesRetrieve({ uuid }: RbacRolesRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<Role>>
    rbacRolesRetrieve({ uuid }: RbacRolesRetrieveRequest, opts?: OperationOpts): Observable<Role | AjaxResponse<Role>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacRolesRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Role>({
            url: '/rbac/roles/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Role viewset
     */
    rbacRolesUpdate({ uuid, roleRequest }: RbacRolesUpdateRequest): Observable<Role>
    rbacRolesUpdate({ uuid, roleRequest }: RbacRolesUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Role>>
    rbacRolesUpdate({ uuid, roleRequest }: RbacRolesUpdateRequest, opts?: OperationOpts): Observable<Role | AjaxResponse<Role>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacRolesUpdate');
        throwIfNullOrUndefined(roleRequest, 'roleRequest', 'rbacRolesUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Role>({
            url: '/rbac/roles/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
            headers,
            body: roleRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of all objects that use this object
     */
    rbacRolesUsedByList({ uuid }: RbacRolesUsedByListRequest): Observable<Array<UsedBy>>
    rbacRolesUsedByList({ uuid }: RbacRolesUsedByListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<UsedBy>>>
    rbacRolesUsedByList({ uuid }: RbacRolesUsedByListRequest, opts?: OperationOpts): Observable<Array<UsedBy> | AjaxResponse<Array<UsedBy>>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'rbacRolesUsedByList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<UsedBy>>({
            url: '/rbac/roles/{uuid}/used_by/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum RbacPermissionsAssignedByRolesListModelEnum {
    BlueprintsBlueprintinstance = 'authentik_blueprints.blueprintinstance',
    CoreApplication = 'authentik_core.application',
    CoreGroup = 'authentik_core.group',
    CoreToken = 'authentik_core.token',
    CoreUser = 'authentik_core.user',
    CryptoCertificatekeypair = 'authentik_crypto.certificatekeypair',
    EnterpriseLicense = 'authentik_enterprise.license',
    EventsEvent = 'authentik_events.event',
    EventsNotification = 'authentik_events.notification',
    EventsNotificationrule = 'authentik_events.notificationrule',
    EventsNotificationtransport = 'authentik_events.notificationtransport',
    EventsNotificationwebhookmapping = 'authentik_events.notificationwebhookmapping',
    FlowsFlow = 'authentik_flows.flow',
    FlowsFlowstagebinding = 'authentik_flows.flowstagebinding',
    OutpostsDockerserviceconnection = 'authentik_outposts.dockerserviceconnection',
    OutpostsKubernetesserviceconnection = 'authentik_outposts.kubernetesserviceconnection',
    OutpostsOutpost = 'authentik_outposts.outpost',
    PoliciesPolicybinding = 'authentik_policies.policybinding',
    PoliciesDummyDummypolicy = 'authentik_policies_dummy.dummypolicy',
    PoliciesEventMatcherEventmatcherpolicy = 'authentik_policies_event_matcher.eventmatcherpolicy',
    PoliciesExpiryPasswordexpirypolicy = 'authentik_policies_expiry.passwordexpirypolicy',
    PoliciesExpressionExpressionpolicy = 'authentik_policies_expression.expressionpolicy',
    PoliciesPasswordPasswordpolicy = 'authentik_policies_password.passwordpolicy',
    PoliciesReputationReputation = 'authentik_policies_reputation.reputation',
    PoliciesReputationReputationpolicy = 'authentik_policies_reputation.reputationpolicy',
    ProvidersLdapLdapprovider = 'authentik_providers_ldap.ldapprovider',
    ProvidersOauth2Accesstoken = 'authentik_providers_oauth2.accesstoken',
    ProvidersOauth2Authorizationcode = 'authentik_providers_oauth2.authorizationcode',
    ProvidersOauth2Oauth2provider = 'authentik_providers_oauth2.oauth2provider',
    ProvidersOauth2Refreshtoken = 'authentik_providers_oauth2.refreshtoken',
    ProvidersOauth2Scopemapping = 'authentik_providers_oauth2.scopemapping',
    ProvidersProxyProxyprovider = 'authentik_providers_proxy.proxyprovider',
    ProvidersRadiusRadiusprovider = 'authentik_providers_radius.radiusprovider',
    ProvidersSamlSamlpropertymapping = 'authentik_providers_saml.samlpropertymapping',
    ProvidersSamlSamlprovider = 'authentik_providers_saml.samlprovider',
    ProvidersScimScimmapping = 'authentik_providers_scim.scimmapping',
    ProvidersScimScimprovider = 'authentik_providers_scim.scimprovider',
    RbacRole = 'authentik_rbac.role',
    SourcesLdapLdappropertymapping = 'authentik_sources_ldap.ldappropertymapping',
    SourcesLdapLdapsource = 'authentik_sources_ldap.ldapsource',
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
    StagesInvitationInvitation = 'authentik_stages_invitation.invitation',
    StagesInvitationInvitationstage = 'authentik_stages_invitation.invitationstage',
    StagesPasswordPasswordstage = 'authentik_stages_password.passwordstage',
    StagesPromptPrompt = 'authentik_stages_prompt.prompt',
    StagesPromptPromptstage = 'authentik_stages_prompt.promptstage',
    StagesUserDeleteUserdeletestage = 'authentik_stages_user_delete.userdeletestage',
    StagesUserLoginUserloginstage = 'authentik_stages_user_login.userloginstage',
    StagesUserLogoutUserlogoutstage = 'authentik_stages_user_logout.userlogoutstage',
    StagesUserWriteUserwritestage = 'authentik_stages_user_write.userwritestage',
    TenantsTenant = 'authentik_tenants.tenant'
}
/**
 * @export
 * @enum {string}
 */
export enum RbacPermissionsAssignedByUsersListModelEnum {
    BlueprintsBlueprintinstance = 'authentik_blueprints.blueprintinstance',
    CoreApplication = 'authentik_core.application',
    CoreGroup = 'authentik_core.group',
    CoreToken = 'authentik_core.token',
    CoreUser = 'authentik_core.user',
    CryptoCertificatekeypair = 'authentik_crypto.certificatekeypair',
    EnterpriseLicense = 'authentik_enterprise.license',
    EventsEvent = 'authentik_events.event',
    EventsNotification = 'authentik_events.notification',
    EventsNotificationrule = 'authentik_events.notificationrule',
    EventsNotificationtransport = 'authentik_events.notificationtransport',
    EventsNotificationwebhookmapping = 'authentik_events.notificationwebhookmapping',
    FlowsFlow = 'authentik_flows.flow',
    FlowsFlowstagebinding = 'authentik_flows.flowstagebinding',
    OutpostsDockerserviceconnection = 'authentik_outposts.dockerserviceconnection',
    OutpostsKubernetesserviceconnection = 'authentik_outposts.kubernetesserviceconnection',
    OutpostsOutpost = 'authentik_outposts.outpost',
    PoliciesPolicybinding = 'authentik_policies.policybinding',
    PoliciesDummyDummypolicy = 'authentik_policies_dummy.dummypolicy',
    PoliciesEventMatcherEventmatcherpolicy = 'authentik_policies_event_matcher.eventmatcherpolicy',
    PoliciesExpiryPasswordexpirypolicy = 'authentik_policies_expiry.passwordexpirypolicy',
    PoliciesExpressionExpressionpolicy = 'authentik_policies_expression.expressionpolicy',
    PoliciesPasswordPasswordpolicy = 'authentik_policies_password.passwordpolicy',
    PoliciesReputationReputation = 'authentik_policies_reputation.reputation',
    PoliciesReputationReputationpolicy = 'authentik_policies_reputation.reputationpolicy',
    ProvidersLdapLdapprovider = 'authentik_providers_ldap.ldapprovider',
    ProvidersOauth2Accesstoken = 'authentik_providers_oauth2.accesstoken',
    ProvidersOauth2Authorizationcode = 'authentik_providers_oauth2.authorizationcode',
    ProvidersOauth2Oauth2provider = 'authentik_providers_oauth2.oauth2provider',
    ProvidersOauth2Refreshtoken = 'authentik_providers_oauth2.refreshtoken',
    ProvidersOauth2Scopemapping = 'authentik_providers_oauth2.scopemapping',
    ProvidersProxyProxyprovider = 'authentik_providers_proxy.proxyprovider',
    ProvidersRadiusRadiusprovider = 'authentik_providers_radius.radiusprovider',
    ProvidersSamlSamlpropertymapping = 'authentik_providers_saml.samlpropertymapping',
    ProvidersSamlSamlprovider = 'authentik_providers_saml.samlprovider',
    ProvidersScimScimmapping = 'authentik_providers_scim.scimmapping',
    ProvidersScimScimprovider = 'authentik_providers_scim.scimprovider',
    RbacRole = 'authentik_rbac.role',
    SourcesLdapLdappropertymapping = 'authentik_sources_ldap.ldappropertymapping',
    SourcesLdapLdapsource = 'authentik_sources_ldap.ldapsource',
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
    StagesInvitationInvitation = 'authentik_stages_invitation.invitation',
    StagesInvitationInvitationstage = 'authentik_stages_invitation.invitationstage',
    StagesPasswordPasswordstage = 'authentik_stages_password.passwordstage',
    StagesPromptPrompt = 'authentik_stages_prompt.prompt',
    StagesPromptPromptstage = 'authentik_stages_prompt.promptstage',
    StagesUserDeleteUserdeletestage = 'authentik_stages_user_delete.userdeletestage',
    StagesUserLoginUserloginstage = 'authentik_stages_user_login.userloginstage',
    StagesUserLogoutUserlogoutstage = 'authentik_stages_user_logout.userlogoutstage',
    StagesUserWriteUserwritestage = 'authentik_stages_user_write.userwritestage',
    TenantsTenant = 'authentik_tenants.tenant'
}
