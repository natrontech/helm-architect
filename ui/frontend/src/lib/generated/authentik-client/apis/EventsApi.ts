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
    Coordinate,
    Event,
    EventRequest,
    EventTopPerUser,
    GenericError,
    Notification,
    NotificationRequest,
    NotificationRule,
    NotificationRuleRequest,
    NotificationTransport,
    NotificationTransportRequest,
    NotificationTransportTest,
    PaginatedEventList,
    PaginatedNotificationList,
    PaginatedNotificationRuleList,
    PaginatedNotificationTransportList,
    PatchedEventRequest,
    PatchedNotificationRequest,
    PatchedNotificationRuleRequest,
    PatchedNotificationTransportRequest,
    TypeCreate,
    UsedBy,
    ValidationError,
} from '../models';

export interface EventsEventsCreateRequest {
    eventRequest: EventRequest;
}

export interface EventsEventsDestroyRequest {
    eventUuid: string;
}

export interface EventsEventsListRequest {
    action?: string;
    clientIp?: string;
    contextAuthorizedApp?: string;
    contextModelApp?: string;
    contextModelName?: string;
    contextModelPk?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
    tenantName?: string;
    username?: string;
}

export interface EventsEventsPartialUpdateRequest {
    eventUuid: string;
    patchedEventRequest?: PatchedEventRequest;
}

export interface EventsEventsPerMonthListRequest {
    action?: string;
    query?: string;
}

export interface EventsEventsRetrieveRequest {
    eventUuid: string;
}

export interface EventsEventsTopPerUserListRequest {
    action?: string;
    topN?: number;
}

export interface EventsEventsUpdateRequest {
    eventUuid: string;
    eventRequest: EventRequest;
}

export interface EventsNotificationsDestroyRequest {
    uuid: string;
}

export interface EventsNotificationsListRequest {
    body?: string;
    created?: string;
    event?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
    seen?: boolean;
    severity?: EventsNotificationsListSeverityEnum;
    user?: number;
}

export interface EventsNotificationsPartialUpdateRequest {
    uuid: string;
    patchedNotificationRequest?: PatchedNotificationRequest;
}

export interface EventsNotificationsRetrieveRequest {
    uuid: string;
}

export interface EventsNotificationsUpdateRequest {
    uuid: string;
    notificationRequest?: NotificationRequest;
}

export interface EventsNotificationsUsedByListRequest {
    uuid: string;
}

export interface EventsRulesCreateRequest {
    notificationRuleRequest: NotificationRuleRequest;
}

export interface EventsRulesDestroyRequest {
    pbmUuid: string;
}

export interface EventsRulesListRequest {
    groupName?: string;
    name?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
    severity?: EventsRulesListSeverityEnum;
}

export interface EventsRulesPartialUpdateRequest {
    pbmUuid: string;
    patchedNotificationRuleRequest?: PatchedNotificationRuleRequest;
}

export interface EventsRulesRetrieveRequest {
    pbmUuid: string;
}

export interface EventsRulesUpdateRequest {
    pbmUuid: string;
    notificationRuleRequest: NotificationRuleRequest;
}

export interface EventsRulesUsedByListRequest {
    pbmUuid: string;
}

export interface EventsTransportsCreateRequest {
    notificationTransportRequest: NotificationTransportRequest;
}

export interface EventsTransportsDestroyRequest {
    uuid: string;
}

export interface EventsTransportsListRequest {
    mode?: EventsTransportsListModeEnum;
    name?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
    sendOnce?: boolean;
    webhookUrl?: string;
}

export interface EventsTransportsPartialUpdateRequest {
    uuid: string;
    patchedNotificationTransportRequest?: PatchedNotificationTransportRequest;
}

export interface EventsTransportsRetrieveRequest {
    uuid: string;
}

export interface EventsTransportsTestCreateRequest {
    uuid: string;
}

export interface EventsTransportsUpdateRequest {
    uuid: string;
    notificationTransportRequest: NotificationTransportRequest;
}

export interface EventsTransportsUsedByListRequest {
    uuid: string;
}

/**
 * no description
 */
export class EventsApi extends BaseAPI {

    /**
     * Get all actions
     */
    eventsEventsActionsList(): Observable<Array<TypeCreate>>
    eventsEventsActionsList(opts?: OperationOpts): Observable<AjaxResponse<Array<TypeCreate>>>
    eventsEventsActionsList(opts?: OperationOpts): Observable<Array<TypeCreate> | AjaxResponse<Array<TypeCreate>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<TypeCreate>>({
            url: '/events/events/actions/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsCreate({ eventRequest }: EventsEventsCreateRequest): Observable<Event>
    eventsEventsCreate({ eventRequest }: EventsEventsCreateRequest, opts?: OperationOpts): Observable<AjaxResponse<Event>>
    eventsEventsCreate({ eventRequest }: EventsEventsCreateRequest, opts?: OperationOpts): Observable<Event | AjaxResponse<Event>> {
        throwIfNullOrUndefined(eventRequest, 'eventRequest', 'eventsEventsCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Event>({
            url: '/events/events/',
            method: 'POST',
            headers,
            body: eventRequest,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsDestroy({ eventUuid }: EventsEventsDestroyRequest): Observable<void>
    eventsEventsDestroy({ eventUuid }: EventsEventsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    eventsEventsDestroy({ eventUuid }: EventsEventsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(eventUuid, 'eventUuid', 'eventsEventsDestroy');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/events/events/{event_uuid}/'.replace('{event_uuid}', encodeURI(eventUuid)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsList({ action, clientIp, contextAuthorizedApp, contextModelApp, contextModelName, contextModelPk, ordering, page, pageSize, search, tenantName, username }: EventsEventsListRequest): Observable<PaginatedEventList>
    eventsEventsList({ action, clientIp, contextAuthorizedApp, contextModelApp, contextModelName, contextModelPk, ordering, page, pageSize, search, tenantName, username }: EventsEventsListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedEventList>>
    eventsEventsList({ action, clientIp, contextAuthorizedApp, contextModelApp, contextModelName, contextModelPk, ordering, page, pageSize, search, tenantName, username }: EventsEventsListRequest, opts?: OperationOpts): Observable<PaginatedEventList | AjaxResponse<PaginatedEventList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (action != null) { query['action'] = action; }
        if (clientIp != null) { query['client_ip'] = clientIp; }
        if (contextAuthorizedApp != null) { query['context_authorized_app'] = contextAuthorizedApp; }
        if (contextModelApp != null) { query['context_model_app'] = contextModelApp; }
        if (contextModelName != null) { query['context_model_name'] = contextModelName; }
        if (contextModelPk != null) { query['context_model_pk'] = contextModelPk; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }
        if (tenantName != null) { query['tenant_name'] = tenantName; }
        if (username != null) { query['username'] = username; }

        return this.request<PaginatedEventList>({
            url: '/events/events/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsPartialUpdate({ eventUuid, patchedEventRequest }: EventsEventsPartialUpdateRequest): Observable<Event>
    eventsEventsPartialUpdate({ eventUuid, patchedEventRequest }: EventsEventsPartialUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Event>>
    eventsEventsPartialUpdate({ eventUuid, patchedEventRequest }: EventsEventsPartialUpdateRequest, opts?: OperationOpts): Observable<Event | AjaxResponse<Event>> {
        throwIfNullOrUndefined(eventUuid, 'eventUuid', 'eventsEventsPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Event>({
            url: '/events/events/{event_uuid}/'.replace('{event_uuid}', encodeURI(eventUuid)),
            method: 'PATCH',
            headers,
            body: patchedEventRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get the count of events per month
     */
    eventsEventsPerMonthList({ action, query: queryAlias }: EventsEventsPerMonthListRequest): Observable<Array<Coordinate>>
    eventsEventsPerMonthList({ action, query: queryAlias }: EventsEventsPerMonthListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<Coordinate>>>
    eventsEventsPerMonthList({ action, query: queryAlias }: EventsEventsPerMonthListRequest, opts?: OperationOpts): Observable<Array<Coordinate> | AjaxResponse<Array<Coordinate>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (action != null) { query['action'] = action; }
        if (queryAlias != null) { query['query'] = queryAlias; }

        return this.request<Array<Coordinate>>({
            url: '/events/events/per_month/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsRetrieve({ eventUuid }: EventsEventsRetrieveRequest): Observable<Event>
    eventsEventsRetrieve({ eventUuid }: EventsEventsRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<Event>>
    eventsEventsRetrieve({ eventUuid }: EventsEventsRetrieveRequest, opts?: OperationOpts): Observable<Event | AjaxResponse<Event>> {
        throwIfNullOrUndefined(eventUuid, 'eventUuid', 'eventsEventsRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Event>({
            url: '/events/events/{event_uuid}/'.replace('{event_uuid}', encodeURI(eventUuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get the top_n events grouped by user count
     */
    eventsEventsTopPerUserList({ action, topN }: EventsEventsTopPerUserListRequest): Observable<Array<EventTopPerUser>>
    eventsEventsTopPerUserList({ action, topN }: EventsEventsTopPerUserListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<EventTopPerUser>>>
    eventsEventsTopPerUserList({ action, topN }: EventsEventsTopPerUserListRequest, opts?: OperationOpts): Observable<Array<EventTopPerUser> | AjaxResponse<Array<EventTopPerUser>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (action != null) { query['action'] = action; }
        if (topN != null) { query['top_n'] = topN; }

        return this.request<Array<EventTopPerUser>>({
            url: '/events/events/top_per_user/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Event Read-Only Viewset
     */
    eventsEventsUpdate({ eventUuid, eventRequest }: EventsEventsUpdateRequest): Observable<Event>
    eventsEventsUpdate({ eventUuid, eventRequest }: EventsEventsUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Event>>
    eventsEventsUpdate({ eventUuid, eventRequest }: EventsEventsUpdateRequest, opts?: OperationOpts): Observable<Event | AjaxResponse<Event>> {
        throwIfNullOrUndefined(eventUuid, 'eventUuid', 'eventsEventsUpdate');
        throwIfNullOrUndefined(eventRequest, 'eventRequest', 'eventsEventsUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Event>({
            url: '/events/events/{event_uuid}/'.replace('{event_uuid}', encodeURI(eventUuid)),
            method: 'PUT',
            headers,
            body: eventRequest,
        }, opts?.responseOpts);
    };

    /**
     * Notification Viewset
     */
    eventsNotificationsDestroy({ uuid }: EventsNotificationsDestroyRequest): Observable<void>
    eventsNotificationsDestroy({ uuid }: EventsNotificationsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    eventsNotificationsDestroy({ uuid }: EventsNotificationsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsNotificationsDestroy');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/events/notifications/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Notification Viewset
     */
    eventsNotificationsList({ body, created, event, ordering, page, pageSize, search, seen, severity, user }: EventsNotificationsListRequest): Observable<PaginatedNotificationList>
    eventsNotificationsList({ body, created, event, ordering, page, pageSize, search, seen, severity, user }: EventsNotificationsListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedNotificationList>>
    eventsNotificationsList({ body, created, event, ordering, page, pageSize, search, seen, severity, user }: EventsNotificationsListRequest, opts?: OperationOpts): Observable<PaginatedNotificationList | AjaxResponse<PaginatedNotificationList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (body != null) { query['body'] = body; }
        if (created != null) { query['created'] = (created as any).toISOString(); }
        if (event != null) { query['event'] = event; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }
        if (seen != null) { query['seen'] = seen; }
        if (severity != null) { query['severity'] = severity; }
        if (user != null) { query['user'] = user; }

        return this.request<PaginatedNotificationList>({
            url: '/events/notifications/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Mark all the user\'s notifications as seen
     */
    eventsNotificationsMarkAllSeenCreate(): Observable<void>
    eventsNotificationsMarkAllSeenCreate(opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    eventsNotificationsMarkAllSeenCreate(opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/events/notifications/mark_all_seen/',
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Notification Viewset
     */
    eventsNotificationsPartialUpdate({ uuid, patchedNotificationRequest }: EventsNotificationsPartialUpdateRequest): Observable<Notification>
    eventsNotificationsPartialUpdate({ uuid, patchedNotificationRequest }: EventsNotificationsPartialUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Notification>>
    eventsNotificationsPartialUpdate({ uuid, patchedNotificationRequest }: EventsNotificationsPartialUpdateRequest, opts?: OperationOpts): Observable<Notification | AjaxResponse<Notification>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsNotificationsPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Notification>({
            url: '/events/notifications/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: patchedNotificationRequest,
        }, opts?.responseOpts);
    };

    /**
     * Notification Viewset
     */
    eventsNotificationsRetrieve({ uuid }: EventsNotificationsRetrieveRequest): Observable<Notification>
    eventsNotificationsRetrieve({ uuid }: EventsNotificationsRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<Notification>>
    eventsNotificationsRetrieve({ uuid }: EventsNotificationsRetrieveRequest, opts?: OperationOpts): Observable<Notification | AjaxResponse<Notification>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsNotificationsRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Notification>({
            url: '/events/notifications/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Notification Viewset
     */
    eventsNotificationsUpdate({ uuid, notificationRequest }: EventsNotificationsUpdateRequest): Observable<Notification>
    eventsNotificationsUpdate({ uuid, notificationRequest }: EventsNotificationsUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<Notification>>
    eventsNotificationsUpdate({ uuid, notificationRequest }: EventsNotificationsUpdateRequest, opts?: OperationOpts): Observable<Notification | AjaxResponse<Notification>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsNotificationsUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Notification>({
            url: '/events/notifications/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
            headers,
            body: notificationRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of all objects that use this object
     */
    eventsNotificationsUsedByList({ uuid }: EventsNotificationsUsedByListRequest): Observable<Array<UsedBy>>
    eventsNotificationsUsedByList({ uuid }: EventsNotificationsUsedByListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<UsedBy>>>
    eventsNotificationsUsedByList({ uuid }: EventsNotificationsUsedByListRequest, opts?: OperationOpts): Observable<Array<UsedBy> | AjaxResponse<Array<UsedBy>>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsNotificationsUsedByList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<UsedBy>>({
            url: '/events/notifications/{uuid}/used_by/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesCreate({ notificationRuleRequest }: EventsRulesCreateRequest): Observable<NotificationRule>
    eventsRulesCreate({ notificationRuleRequest }: EventsRulesCreateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationRule>>
    eventsRulesCreate({ notificationRuleRequest }: EventsRulesCreateRequest, opts?: OperationOpts): Observable<NotificationRule | AjaxResponse<NotificationRule>> {
        throwIfNullOrUndefined(notificationRuleRequest, 'notificationRuleRequest', 'eventsRulesCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationRule>({
            url: '/events/rules/',
            method: 'POST',
            headers,
            body: notificationRuleRequest,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesDestroy({ pbmUuid }: EventsRulesDestroyRequest): Observable<void>
    eventsRulesDestroy({ pbmUuid }: EventsRulesDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    eventsRulesDestroy({ pbmUuid }: EventsRulesDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(pbmUuid, 'pbmUuid', 'eventsRulesDestroy');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/events/rules/{pbm_uuid}/'.replace('{pbm_uuid}', encodeURI(pbmUuid)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesList({ groupName, name, ordering, page, pageSize, search, severity }: EventsRulesListRequest): Observable<PaginatedNotificationRuleList>
    eventsRulesList({ groupName, name, ordering, page, pageSize, search, severity }: EventsRulesListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedNotificationRuleList>>
    eventsRulesList({ groupName, name, ordering, page, pageSize, search, severity }: EventsRulesListRequest, opts?: OperationOpts): Observable<PaginatedNotificationRuleList | AjaxResponse<PaginatedNotificationRuleList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (groupName != null) { query['group__name'] = groupName; }
        if (name != null) { query['name'] = name; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }
        if (severity != null) { query['severity'] = severity; }

        return this.request<PaginatedNotificationRuleList>({
            url: '/events/rules/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesPartialUpdate({ pbmUuid, patchedNotificationRuleRequest }: EventsRulesPartialUpdateRequest): Observable<NotificationRule>
    eventsRulesPartialUpdate({ pbmUuid, patchedNotificationRuleRequest }: EventsRulesPartialUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationRule>>
    eventsRulesPartialUpdate({ pbmUuid, patchedNotificationRuleRequest }: EventsRulesPartialUpdateRequest, opts?: OperationOpts): Observable<NotificationRule | AjaxResponse<NotificationRule>> {
        throwIfNullOrUndefined(pbmUuid, 'pbmUuid', 'eventsRulesPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationRule>({
            url: '/events/rules/{pbm_uuid}/'.replace('{pbm_uuid}', encodeURI(pbmUuid)),
            method: 'PATCH',
            headers,
            body: patchedNotificationRuleRequest,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesRetrieve({ pbmUuid }: EventsRulesRetrieveRequest): Observable<NotificationRule>
    eventsRulesRetrieve({ pbmUuid }: EventsRulesRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationRule>>
    eventsRulesRetrieve({ pbmUuid }: EventsRulesRetrieveRequest, opts?: OperationOpts): Observable<NotificationRule | AjaxResponse<NotificationRule>> {
        throwIfNullOrUndefined(pbmUuid, 'pbmUuid', 'eventsRulesRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationRule>({
            url: '/events/rules/{pbm_uuid}/'.replace('{pbm_uuid}', encodeURI(pbmUuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationRule Viewset
     */
    eventsRulesUpdate({ pbmUuid, notificationRuleRequest }: EventsRulesUpdateRequest): Observable<NotificationRule>
    eventsRulesUpdate({ pbmUuid, notificationRuleRequest }: EventsRulesUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationRule>>
    eventsRulesUpdate({ pbmUuid, notificationRuleRequest }: EventsRulesUpdateRequest, opts?: OperationOpts): Observable<NotificationRule | AjaxResponse<NotificationRule>> {
        throwIfNullOrUndefined(pbmUuid, 'pbmUuid', 'eventsRulesUpdate');
        throwIfNullOrUndefined(notificationRuleRequest, 'notificationRuleRequest', 'eventsRulesUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationRule>({
            url: '/events/rules/{pbm_uuid}/'.replace('{pbm_uuid}', encodeURI(pbmUuid)),
            method: 'PUT',
            headers,
            body: notificationRuleRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of all objects that use this object
     */
    eventsRulesUsedByList({ pbmUuid }: EventsRulesUsedByListRequest): Observable<Array<UsedBy>>
    eventsRulesUsedByList({ pbmUuid }: EventsRulesUsedByListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<UsedBy>>>
    eventsRulesUsedByList({ pbmUuid }: EventsRulesUsedByListRequest, opts?: OperationOpts): Observable<Array<UsedBy> | AjaxResponse<Array<UsedBy>>> {
        throwIfNullOrUndefined(pbmUuid, 'pbmUuid', 'eventsRulesUsedByList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<UsedBy>>({
            url: '/events/rules/{pbm_uuid}/used_by/'.replace('{pbm_uuid}', encodeURI(pbmUuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsCreate({ notificationTransportRequest }: EventsTransportsCreateRequest): Observable<NotificationTransport>
    eventsTransportsCreate({ notificationTransportRequest }: EventsTransportsCreateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationTransport>>
    eventsTransportsCreate({ notificationTransportRequest }: EventsTransportsCreateRequest, opts?: OperationOpts): Observable<NotificationTransport | AjaxResponse<NotificationTransport>> {
        throwIfNullOrUndefined(notificationTransportRequest, 'notificationTransportRequest', 'eventsTransportsCreate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationTransport>({
            url: '/events/transports/',
            method: 'POST',
            headers,
            body: notificationTransportRequest,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsDestroy({ uuid }: EventsTransportsDestroyRequest): Observable<void>
    eventsTransportsDestroy({ uuid }: EventsTransportsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    eventsTransportsDestroy({ uuid }: EventsTransportsDestroyRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsDestroy');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/events/transports/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsList({ mode, name, ordering, page, pageSize, search, sendOnce, webhookUrl }: EventsTransportsListRequest): Observable<PaginatedNotificationTransportList>
    eventsTransportsList({ mode, name, ordering, page, pageSize, search, sendOnce, webhookUrl }: EventsTransportsListRequest, opts?: OperationOpts): Observable<AjaxResponse<PaginatedNotificationTransportList>>
    eventsTransportsList({ mode, name, ordering, page, pageSize, search, sendOnce, webhookUrl }: EventsTransportsListRequest, opts?: OperationOpts): Observable<PaginatedNotificationTransportList | AjaxResponse<PaginatedNotificationTransportList>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        const query: HttpQuery = {};

        if (mode != null) { query['mode'] = mode; }
        if (name != null) { query['name'] = name; }
        if (ordering != null) { query['ordering'] = ordering; }
        if (page != null) { query['page'] = page; }
        if (pageSize != null) { query['page_size'] = pageSize; }
        if (search != null) { query['search'] = search; }
        if (sendOnce != null) { query['send_once'] = sendOnce; }
        if (webhookUrl != null) { query['webhook_url'] = webhookUrl; }

        return this.request<PaginatedNotificationTransportList>({
            url: '/events/transports/',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsPartialUpdate({ uuid, patchedNotificationTransportRequest }: EventsTransportsPartialUpdateRequest): Observable<NotificationTransport>
    eventsTransportsPartialUpdate({ uuid, patchedNotificationTransportRequest }: EventsTransportsPartialUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationTransport>>
    eventsTransportsPartialUpdate({ uuid, patchedNotificationTransportRequest }: EventsTransportsPartialUpdateRequest, opts?: OperationOpts): Observable<NotificationTransport | AjaxResponse<NotificationTransport>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsPartialUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationTransport>({
            url: '/events/transports/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
            headers,
            body: patchedNotificationTransportRequest,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsRetrieve({ uuid }: EventsTransportsRetrieveRequest): Observable<NotificationTransport>
    eventsTransportsRetrieve({ uuid }: EventsTransportsRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationTransport>>
    eventsTransportsRetrieve({ uuid }: EventsTransportsRetrieveRequest, opts?: OperationOpts): Observable<NotificationTransport | AjaxResponse<NotificationTransport>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationTransport>({
            url: '/events/transports/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Send example notification using selected transport. Requires Modify permissions.
     */
    eventsTransportsTestCreate({ uuid }: EventsTransportsTestCreateRequest): Observable<NotificationTransportTest>
    eventsTransportsTestCreate({ uuid }: EventsTransportsTestCreateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationTransportTest>>
    eventsTransportsTestCreate({ uuid }: EventsTransportsTestCreateRequest, opts?: OperationOpts): Observable<NotificationTransportTest | AjaxResponse<NotificationTransportTest>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsTestCreate');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationTransportTest>({
            url: '/events/transports/{uuid}/test/'.replace('{uuid}', encodeURI(uuid)),
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * NotificationTransport Viewset
     */
    eventsTransportsUpdate({ uuid, notificationTransportRequest }: EventsTransportsUpdateRequest): Observable<NotificationTransport>
    eventsTransportsUpdate({ uuid, notificationTransportRequest }: EventsTransportsUpdateRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationTransport>>
    eventsTransportsUpdate({ uuid, notificationTransportRequest }: EventsTransportsUpdateRequest, opts?: OperationOpts): Observable<NotificationTransport | AjaxResponse<NotificationTransport>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsUpdate');
        throwIfNullOrUndefined(notificationTransportRequest, 'notificationTransportRequest', 'eventsTransportsUpdate');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<NotificationTransport>({
            url: '/events/transports/{uuid}/'.replace('{uuid}', encodeURI(uuid)),
            method: 'PUT',
            headers,
            body: notificationTransportRequest,
        }, opts?.responseOpts);
    };

    /**
     * Get a list of all objects that use this object
     */
    eventsTransportsUsedByList({ uuid }: EventsTransportsUsedByListRequest): Observable<Array<UsedBy>>
    eventsTransportsUsedByList({ uuid }: EventsTransportsUsedByListRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<UsedBy>>>
    eventsTransportsUsedByList({ uuid }: EventsTransportsUsedByListRequest, opts?: OperationOpts): Observable<Array<UsedBy> | AjaxResponse<Array<UsedBy>>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'eventsTransportsUsedByList');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<UsedBy>>({
            url: '/events/transports/{uuid}/used_by/'.replace('{uuid}', encodeURI(uuid)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum EventsNotificationsListSeverityEnum {
    Alert = 'alert',
    Notice = 'notice',
    Warning = 'warning'
}
/**
 * @export
 * @enum {string}
 */
export enum EventsRulesListSeverityEnum {
    Alert = 'alert',
    Notice = 'notice',
    Warning = 'warning'
}
/**
 * @export
 * @enum {string}
 */
export enum EventsTransportsListModeEnum {
    Email = 'email',
    Local = 'local',
    Webhook = 'webhook',
    WebhookSlack = 'webhook_slack'
}