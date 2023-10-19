import { browser } from "$app/environment";
import { client } from "$lib/pocketbase";
import { updateDataStores } from "$lib/stores/data";
import toast from "svelte-french-toast";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const { id } = params;

    console.log("id", id);

    if (client.authStore.model) {
        await updateDataStores().catch((error) => {
            toast.error(error);
        });
        // await updateDataStores({filter: UpdateFilterEnum.ChartByTeam, teamId}).catch((error) => {
        //     toast.error(error);
        // });
    }
};
