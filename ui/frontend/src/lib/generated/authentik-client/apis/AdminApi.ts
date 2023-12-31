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
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    App,
    GenericError,
    LoginMetrics,
    System,
    Task,
    ValidationError,
    Version,
    Workers,
} from '../models';

export interface AdminSystemTasksRetrieveRequest {
    id: string;
}

export interface AdminSystemTasksRetryCreateRequest {
    id: string;
}

/**
 * no description
 */
export class AdminApi extends BaseAPI {

    /**
     * Read-only view list all installed apps
     */
    adminAppsList(): Observable<Array<App>>
    adminAppsList(opts?: OperationOpts): Observable<AjaxResponse<Array<App>>>
    adminAppsList(opts?: OperationOpts): Observable<Array<App> | AjaxResponse<Array<App>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<App>>({
            url: '/admin/apps/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Login Metrics per 1h
     */
    adminMetricsRetrieve(): Observable<LoginMetrics>
    adminMetricsRetrieve(opts?: OperationOpts): Observable<AjaxResponse<LoginMetrics>>
    adminMetricsRetrieve(opts?: OperationOpts): Observable<LoginMetrics | AjaxResponse<LoginMetrics>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<LoginMetrics>({
            url: '/admin/metrics/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Read-only view list all installed models
     */
    adminModelsList(): Observable<Array<App>>
    adminModelsList(opts?: OperationOpts): Observable<AjaxResponse<Array<App>>>
    adminModelsList(opts?: OperationOpts): Observable<Array<App> | AjaxResponse<Array<App>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<App>>({
            url: '/admin/models/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get system information.
     */
    adminSystemCreate(): Observable<System>
    adminSystemCreate(opts?: OperationOpts): Observable<AjaxResponse<System>>
    adminSystemCreate(opts?: OperationOpts): Observable<System | AjaxResponse<System>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<System>({
            url: '/admin/system/',
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get system information.
     */
    adminSystemRetrieve(): Observable<System>
    adminSystemRetrieve(opts?: OperationOpts): Observable<AjaxResponse<System>>
    adminSystemRetrieve(opts?: OperationOpts): Observable<System | AjaxResponse<System>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<System>({
            url: '/admin/system/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * List system tasks
     */
    adminSystemTasksList(): Observable<Array<Task>>
    adminSystemTasksList(opts?: OperationOpts): Observable<AjaxResponse<Array<Task>>>
    adminSystemTasksList(opts?: OperationOpts): Observable<Array<Task> | AjaxResponse<Array<Task>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Array<Task>>({
            url: '/admin/system_tasks/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get a single system task
     */
    adminSystemTasksRetrieve({ id }: AdminSystemTasksRetrieveRequest): Observable<Task>
    adminSystemTasksRetrieve({ id }: AdminSystemTasksRetrieveRequest, opts?: OperationOpts): Observable<AjaxResponse<Task>>
    adminSystemTasksRetrieve({ id }: AdminSystemTasksRetrieveRequest, opts?: OperationOpts): Observable<Task | AjaxResponse<Task>> {
        throwIfNullOrUndefined(id, 'id', 'adminSystemTasksRetrieve');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Task>({
            url: '/admin/system_tasks/{id}/'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Retry task
     */
    adminSystemTasksRetryCreate({ id }: AdminSystemTasksRetryCreateRequest): Observable<void>
    adminSystemTasksRetryCreate({ id }: AdminSystemTasksRetryCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    adminSystemTasksRetryCreate({ id }: AdminSystemTasksRetryCreateRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(id, 'id', 'adminSystemTasksRetryCreate');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<void>({
            url: '/admin/system_tasks/{id}/retry/'.replace('{id}', encodeURI(id)),
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get running and latest version.
     */
    adminVersionRetrieve(): Observable<Version>
    adminVersionRetrieve(opts?: OperationOpts): Observable<AjaxResponse<Version>>
    adminVersionRetrieve(opts?: OperationOpts): Observable<Version | AjaxResponse<Version>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Version>({
            url: '/admin/version/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * Get currently connected worker count.
     */
    adminWorkersRetrieve(): Observable<Workers>
    adminWorkersRetrieve(opts?: OperationOpts): Observable<AjaxResponse<Workers>>
    adminWorkersRetrieve(opts?: OperationOpts): Observable<Workers | AjaxResponse<Workers>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // authentik authentication
        };

        return this.request<Workers>({
            url: '/admin/workers/',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

}
