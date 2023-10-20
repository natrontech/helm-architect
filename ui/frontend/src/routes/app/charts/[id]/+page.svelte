<script lang="ts">
  import ToolBar from "$lib/components/canvas/drawer/ToolBar.svelte";
  import { Node, Svelvet } from "svelvet";
  import { onMount } from "svelte";

  let nodes: any = [];

  function allowDrop(event: any) {
    console.log("Drop allowed");
    event.preventDefault();
  }

  function drop(event: any) {
    console.log("Drop detected");
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    if (data === "controller") {
      console.log("Controller dropped");
      nodes = [...nodes, { label: "Controller" }];
    }
  }

  // You might also want to initialize nodes on component mount or fetch them from some API.
  onMount(() => {
    nodes = [{ label: "Initial Nodes" }];
  });
</script>

<Svelvet id="my-canvas">
  {#each nodes as node}
    <Node label={node.label} />
  {/each}
</Svelvet>

<ToolBar />
