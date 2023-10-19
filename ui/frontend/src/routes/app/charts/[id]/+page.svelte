<script>
  import { Node, Svelvet, Minimap, Controls } from "svelvet";
  import {Drawer, ThemeToggle} from 'svelvet';
</script>


<div
  class="absolute w-full r-0 l-0 top-0 bottom-0"
>
  <Svelvet id="my-canvas">
    <Node></Node>
    <Node id="alpha" bgColor="red" label="Default Node" />

  </Svelvet>
</div>
