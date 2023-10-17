import { client } from "$lib/pocketbase";
import type { ChartsResponse, TeamsResponse } from "$lib/pocketbase/generated-types";
import { get, writable, type Writable } from "svelte/store";

export const teams: Writable<TeamsResponse[]> = writable<TeamsResponse[]>([]);
export const selectedTeam: Writable<TeamsResponse> = writable<TeamsResponse>();
export const charts: Writable<ChartsResponse[]> = writable<ChartsResponse[]>([]);

export enum UpdateFilterEnum {
    ALL = "all",
    ChartsByTeam = "charts_by_team"
}

export interface UpdateFilter {
    filter: UpdateFilterEnum;
    teamId?: string;
}

export async function updateDataStores(filter: UpdateFilter = { filter: UpdateFilterEnum.ALL }) {
    await updateTeams();
    await updateCharts();

    if (filter.filter === UpdateFilterEnum.ChartsByTeam) {
        const teamId = filter.teamId;
        if (teamId) {
            const team = get(teams).find((team) => team.id === teamId);
            if (team) {
                selectedTeam.set(team);
            }
        }
    }
}

export async function updateTeams() {
    await client
        .collection("teams")
        .getFullList({
            expand: "users"
        })
        .then((response: unknown) => {
            teams.set(response as TeamsResponse[]);
            return response;
        })
        .catch((error: unknown) => {
            console.log(error);
        });
}

export async function updateCharts() {
    await client
        .collection("charts")
        .getFullList({
            expand: "teams,teams.users"
        })
        .then((response: unknown) => {
            charts.set(response as ChartsResponse[]);
            return response;
        })
        .catch((error: unknown) => {
            console.log(error);
        });
}
