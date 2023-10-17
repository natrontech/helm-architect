import { client } from "$lib/pocketbase";

export function avatarUrl(): string | null {
    if (client.authStore) {
        return (
            "/api/files/" +
            client.authStore.model?.collectionId +
            "/" +
            client.authStore.model?.id +
            "/" +
            client.authStore.model?.avatar
        );
    }
    return null;
}
