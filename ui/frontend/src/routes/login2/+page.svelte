<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    import { Label, Input, Checkbox, Button, GradientButton } from "flowbite-svelte";
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 to-accent-400">
    <h1>Login yourself</h1>
    <p>
    {#if $page.data.session && $page.data.session.user }
        {#if $page.data.session.user?.image}
        <span
            style="background-image: url('{$page.data.session.user.image}')"
            class="avatar"
        />
        {/if}
        <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
        <div>
            <Button class="w-full" type="submit" on:click={() => signIn("authentik",  { callbackUrl: 'http://localhost:5173/app/charts' })}>Log in</Button>
        </div>
    {/if}
    </p>
</div>