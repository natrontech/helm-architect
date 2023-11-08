import { browser } from "$app/environment";
import type { PageLoad } from "./$types";
import { updateHelmArchitectStores } from "$lib/stores/helmarchitect";

export const load: PageLoad = async () => {
    if (browser) {
        updateHelmArchitectStores()
    }
};
