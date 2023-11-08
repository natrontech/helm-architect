<script lang="ts">
    import { Button } from "flowbite-svelte";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import { PUBLIC_LOGIN_CALLBACK } from "$env/static/public"
</script>

<div
  class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 to-accent-400"
>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white dark:bg-gray-800 px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-md mb-5">
        <img
          class="h-20 w-auto mx-auto"
          src="/images/helm-architect-color-typo.png"
          alt="helm-architect-logo"
        />
      </div>

      {#if $page.data.session && $page.data.session.user }
        {#if $page.data.session.user?.image}
        <span
            style="background-image: url('{$page.data.session.user.image}')"
            class="avatar"
        />
        {/if}
        <div class="sm:mx-auto sm:w-full sm:max-w-md mb-5" style="text-align: center;">
        <p>
          <span class="signedInText">
          <small>Signed in as</small><br />
          <strong>{$page.data.session.user?.name}</strong>
          </span>
        </p>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md mb-5">
        <p><Button class="w-full" href="{PUBLIC_LOGIN_CALLBACK}">Home</Button></p>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md mb-5">
        <p><Button class="w-full" on:click={() => signOut()}>Sign out</Button></p>
        </div>
      {:else}
        <div>
          <Button class="w-full" on:click={() => signIn("authentik",  { callbackUrl: PUBLIC_LOGIN_CALLBACK })}>Log in</Button>
        </div>
      {/if}
    </div>
  </div>
</div>
