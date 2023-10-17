/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
    Charts = "charts",
    Teams = "teams",
    Users = "users"
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
    id: RecordIdString;
    created: IsoDateString;
    updated: IsoDateString;
    collectionId: string;
    collectionName: Collections;
    expand?: T;
};

export type AuthSystemFields<T = never> = {
    email: string;
    emailVisibility: boolean;
    username: string;
    verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type ChartsRecord = {
    apiVersion: string;
    appVersion: string;
    description: string;
    name: string;
    teams: RecordIdString[];
    version: string;
};

export type TeamsRecord = {
    name: string;
    users: RecordIdString[];
};

export type UsersRecord = {
    avatar?: string;
    name?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type ChartsResponse<Texpand = unknown> = Required<ChartsRecord> & BaseSystemFields<Texpand>;
export type TeamsResponse<Texpand = unknown> = Required<TeamsRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
    charts: ChartsRecord;
    teams: TeamsRecord;
    users: UsersRecord;
};

export type CollectionResponses = {
    charts: ChartsResponse;
    teams: TeamsResponse;
    users: UsersResponse;
};
