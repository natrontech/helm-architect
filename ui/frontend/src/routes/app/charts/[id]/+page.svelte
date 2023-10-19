<script>
    import ToolBar from "$lib/components/canvas/drawer/ToolBar.svelte";
  import { Node, Svelvet, Minimap, Controls } from "svelvet";
</script>

<Svelvet id="my-canvas">
  <Node />
</Svelvet>

<ToolBar />
