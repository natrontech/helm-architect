<script lang="ts">
  import { Boxes } from "lucide-svelte"
</script>

<div
  class="absolute left-20 bg-white p-2 shadow-lg rounded-lg bottom-1/2 translate-y-1/2 -translate-x-1/2 border-2 border-primary-600 select-none"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    draggable="true"
    class="flex flex-col justify-center items-center hover:bg-gray-100 rounded-lg p-2 cursor-auto select-none text-primary-600"
  >
    <Boxes class="w-6 h-6" />
    <div class="text-xs font-semibold">Controller</div>
  </div>
</div>

<style>
  .dragging {
    border-style: dashed;
    border-width: 2px;
    background-color: transparent;
  }
</style>
