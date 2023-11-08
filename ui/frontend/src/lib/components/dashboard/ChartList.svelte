<script lang="ts">
  import { Card, Button, Badge, Dropdown, DropdownItem } from "flowbite-svelte";
  import { charts } from "$lib/stores/helmarchitect";
  import { Building2, MoreHorizontal, PencilRuler, Trash2 } from "lucide-svelte";
  import { page } from "$app/stores";

  $: activeUrl = $page.url.pathname;
</script>

{#key $charts}
  {#each $charts as chart}
    <Card class="max-w-full relative">
      <Badge class="absolute top-8 right-8">
        chart version: {chart?.semver}
      </Badge>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {chart?.name}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        [description not yet supported by the api]
      </p>
      <ul class="space-y-4">
        <li class="flex space-x-2 mt-4">
          <Building2 class="" />
          <span class="text-base font-normal leading-tight">
            <!-- @ts-ignore -->
            <!-- {#each chart?.expand.teams as team}
              {team?.name}
            {/each} -->
            [team not yet supported by the api]
          </span>
        </li>
        <li class="flex ml-3">
          <!-- {#each chart?.expand.teams as team}
            {#each team.expand.users as user}
              <Avatar
                id={user.id}
                src={avatarUrlById(user.collectionId, user.id, user.avatar)}
                stacked
              />
              <Tooltip triggeredBy="#{user.id}">{user.name}</Tooltip>
            {/each}
          {/each} -->
          [team users not yet supported by the api]
        </li>
      </ul>

      <Button class="absolute bottom-8 right-8"><MoreHorizontal /></Button>
      <Dropdown {activeUrl}>
        <DropdownItem><Building2 class="inline w-5 h-5" /> Move</DropdownItem>
        <DropdownItem href="/app/charts/{chart.name}"
          ><PencilRuler class="inline w-5 h-5" /> Edit</DropdownItem
        >
        <DropdownItem><Trash2 class="inline w-5 h-5" /> Delete</DropdownItem>
      </Dropdown>
    </Card>
  {/each}
{/key}
