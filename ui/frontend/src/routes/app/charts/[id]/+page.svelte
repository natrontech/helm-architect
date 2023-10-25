<script lang="ts">
  import { Boxes } from "lucide-svelte";
  import colorTheme from "$lib/stores/theme";
  import type { XYPair, EdgeStyle, NodeConfig, SvelvetConfig } from "svelvet";
  import { Node, Svelvet } from "svelvet";
  import type { ComponentType } from "svelte";

  // Toolbar props
  let width = 0;
  let height = 0;
  let minimap = false;
  let translation: XYPair = { x: 0, y: 0 };
  let controls = false;
  let edge: ComponentType | null = null;
  let edgeStyle: EdgeStyle = "bezier";
  let snapTo = 0;
  let editable = false;
  let fitView: boolean | "resize" = false;
  let locked = false;
  let zoom = 1;
  let mermaid = "";
  let mermaidConfig: Record<string, NodeConfig> = {};
  let TD = false;
  let disableSelection = false;
  let raiseEdgesOnSelect: boolean | "source" | "target" = false;
  let modifier: "alt" | "ctrl" | "shift" | "meta" = "meta";
  let trackpadPan = false;
  let toggle = false;

  $: svelvetProps = {
    width,
    height,
    minimap,
    translation,
    controls,
    edge,
    edgeStyle,
    snapTo,
    editable,
    fitView,
    locked,
    zoom,
    theme: $colorTheme,
    mermaid,
    mermaidConfig,
    TD,
    disableSelection,
    raiseEdgesOnSelect,
    modifier,
    trackpadPan,
    toggle
  };

  let nodes: NodeConfig[] = [];
  let dropped_in = false;

  // Toolbar functions
  function dragCopy(node: HTMLElement) {
    let clone: HTMLElement | null = null;
    let offsetX = 0;
    let offsetY = 0;

    function onMouseDown(event: MouseEvent) {
      const rect = node.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;

      // Clone the node and copy its styles
      clone = node.cloneNode(true) as HTMLElement;
      const computedStyle = getComputedStyle(node);
      for (let i = 0; i < computedStyle.length; i++) {
        const styleProperty: any = computedStyle[i];
        clone.style[styleProperty] = computedStyle[styleProperty];
      }
      clone.style.position = "fixed";
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.zIndex = "9999";
      clone.style.pointerEvents = "none";

      document.body.appendChild(clone);

      // Add a border to the original node to indicate dragging

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      node.style.cursor = "grabbing";
    }

    function onMouseMove(event: MouseEvent) {
      if (clone) {
        clone.style.top = `${event.clientY - offsetY}px`;
        clone.style.left = `${event.clientX - offsetX}px`;
      }
    }

    function onMouseUp() {
      if (clone) {
        document.body.removeChild(clone);
        clone = null;
      }

      // Remove the border from the original node
      node.style.border = "none";

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      node.style.cursor = "grab";

      // Additional logic to handle dropping into the dropzone
      if (dropped_in) {
        nodes = [
          ...nodes,
          {
            label: "Controller",
            useDefaults: true
          }
        ];
        dropped_in = false;
      }
    }

    node.addEventListener("mousedown", onMouseDown);

    return {
      destroy() {
        node.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
    };
  }

  const handleDragEnter = (): void => {
    console.log("drag enter");
    if (!dropped_in) dropped_in = true;
  };
  const handleDragLeave = (): void => {
    console.log("drag leave");
    if (dropped_in) dropped_in = false;
  };
</script>

<div class="h-full w-full">
  <!-- Toolbar Component -->
  <div
    class="absolute z-10 left-20 bg-white p-2 shadow-lg rounded-lg bottom-1/2 translate-y-1/2 -translate-x-1/2 border-2 border-primary-600 select-none"
  >
    <div
      use:dragCopy
      class="flex flex-col justify-center items-center hover:bg-gray-100 rounded-lg p-2 cursor-auto select-none text-primary-600 draggable z-20"
    >
      <Boxes class="w-6 h-6" />
      <div class="text-xs font-semibold">Controller</div>
    </div>
  </div>

  <!-- Dropzone Component -->
  <div
    role="presentation"
    class="h-full w-full"
    on:mouseenter={handleDragEnter}
    on:mouseleave={handleDragLeave}
  >
    <Svelvet id="lowcode" {...svelvetProps}>
      {#each nodes as { ...nodeProps }}
        <Node {...nodeProps} drop="cursor" />
      {/each}
    </Svelvet>
  </div>
</div>

<style>
  .draggable {
    cursor: grab;
  }
</style>
