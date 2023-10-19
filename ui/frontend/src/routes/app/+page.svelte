<script>
  import ChartList from "$lib/components/dashboard/ChartList.svelte";
  import Stats from "$lib/components/dashboard/Stats.svelte";
  import { Badge, Heading } from "flowbite-svelte";
  import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
</script>

<div class="bg-primary-700 h-auto p-10 relative pb-20">
  <div class="text-center flex justify-center items-center flex-col space-y-4">
    <Heading tag="h3" class="flex text-white font-extralight items-center w-auto">
      Welcome to&nbsp;<b class="font-semibold">HELM</b>Architect <Badge
        class="text-xl font-semibold ml-2">alpha</Badge
      >
    </Heading>
    <span class="bg-black text-white text-sm font-extralight px-2 py-1 rounded-full mt-2">
      <b>Low-code</b> Solution
    </span>
  </div>
  <div class="absolute left-1/2 -translate-x-1/2 -bottom-16">
    <Stats />
  </div>
</div>

<div class="max-w-4xl mx-auto py-10 flex flex-col space-y-6 mt-20">
  <div>
    <Heading tag="h5" class="flex font-normal items-center w-auto mb-5">
      <span class="border-r border-primary pr-2"> Latest Charts </span>&nbsp;
      <a href="/app/charts" class="inline-flex items-center text-primary-600 hover:underline">
        View more
        <ArrowUpRightFromSquareOutline class="w-3 h-3 ml-2.5" />
      </a>
    </Heading>
    <ChartList />
  </div>
</div>
