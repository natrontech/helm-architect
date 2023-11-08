import { Configuration, type ChartsChart, type ConfigurationParameters, ChartsApi, type ChartsConfiguration } from "$lib/generated/helm-architect-client";
import { writable, type Readable, type Writable, derived } from "svelte/store";
import { take } from 'rxjs/operators';

const chartsApi : ChartsApi = new ChartsApi(new Configuration({} satisfies ConfigurationParameters))

export interface ChartNameAndRevisionToConfiguration {
    name: string
    semver: string
    configuration: ChartsConfiguration
}

const chartNamesInternal: Writable<string[]> = writable<string[]>([])
export const chartNames: Readable<string[]> = derived(chartNamesInternal, (names) => names)

const chartRevsisionsInternal: Writable<Map<string, string[]>> = writable<Map<string, string[]>>(new Map<string, string[]>())
export const chartRevisions: Readable<Map<string, string[]>> = derived(chartRevsisionsInternal, (names) => names)

export const charts: Writable<ChartNameAndRevisionToConfiguration[]> = writable<ChartNameAndRevisionToConfiguration[]>([])

export function updateHelmArchitectStores() {

    chartNamesInternal.subscribe(names => updateRevisions(names))
    chartRevsisionsInternal.subscribe(chartsToRevisions => updateCharts(chartsToRevisions))
    updateChartNames()
}

function updateChartNames() {

    chartsApi.apiAlphaChartsGet()
        .pipe(take(1))
        .subscribe(data => chartNamesInternal.set(data))
}

function updateRevisions(chartNames: string[]) {

    chartRevsisionsInternal.set(new Map<string, string[]>())
    chartNames.forEach(n => {
        chartsApi.apiAlphaChartNameRevisionsGet({ name: n })
            .pipe(take(1))
            .subscribe(data => chartRevsisionsInternal.update((m) => m.set(n, data)))
    })
}

function updateCharts(chartsToRevisions: Map<string, string[]>) {

    charts.set([])
    chartsToRevisions.forEach((revisions, chartName) => {
        revisions.forEach(revision => {
            chartsApi.apiAlphaChartNameRevisionSemanticVersionGet({ name: chartName, semanticVersion: revision })
                .pipe(take(1))
                .subscribe(data => charts.update(chrts => Array.of(...chrts, { name: chartName, semver: revision, configuration: data } satisfies ChartNameAndRevisionToConfiguration)))
        })
    })
}