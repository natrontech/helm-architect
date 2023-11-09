<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { Boxes, Cable, Pencil, Trash } from "lucide-svelte";
  import { Anchor, Node, type Connections, type NodeConfig } from "svelvet";

  export let isSelected: boolean = false;
  export let activeHover: boolean = false;

  export let nodeProps: NodeConfig = {};
  export let idx: number = 0;

  export let selectNode = (idx: number) => {};
  export let deleteNode = (idx: number) => {};
  export let addConnection = (sourceNode: NodeConfig, targetNode: NodeConfig) => {};
</script>

<Node {...nodeProps} drop="cursor" dynamic={true} on:nodeClicked={() => selectNode(idx)}>

  <div
    class="node
			bg-white
			border-background
			rounded-xl
			p-2
		"
  >
    <div class="input-anchors">
      <Anchor multiple input nodeConnect direction="south" invisible={!isSelected} />
    </div>
    <div class="output-anchors">
      <Anchor multiple output nodeConnect invisible={!activeHover} />
    </div>
    <div>
      <Button
        outline
        class=""
        size="xs"
        on:click={() => {
          selectNode(idx);
        }}
      >
        <Boxes class="w-5 h-5" strokeWidth={2} />
      </Button>
      <Button outline class="" size="xs" on:click={() => selectNode(idx)}>
        <Cable class="w-5 h-5" strokeWidth={2} />
      </Button>

      <Button outline class="" size="xs" on:click={() => selectNode(idx)}>
        <Pencil class="w-5 h-5" strokeWidth={2} />
      </Button>

      <Button outline color="red" class="" size="xs" on:click={() => deleteNode(idx)}>
        <Trash class="w-5 h-5" strokeWidth={2} />
      </Button>
    </div>
    <h1 class="text-2xl font-bold pr-10">{nodeProps.label}</h1>
  </div>
</Node>
