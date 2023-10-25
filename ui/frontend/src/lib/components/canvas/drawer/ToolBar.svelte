<script lang="ts">
  import { Boxes } from "lucide-svelte";

  function dragCopy(node: HTMLElement) {
    let copy: HTMLElement | null = null;
    let offsetX = 0;
    let offsetY = 0;

    function onMouseDown(event: MouseEvent) {
      const rect = node.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      node.style.cursor = "grabbing";

      // Create a copy of the element
      copy = node.cloneNode(true) as HTMLElement;
      copy.style.position = "fixed";
      copy.style.cursor = "grabbing";
      copy.style.top = `${event.clientY - offsetY}px`;
      copy.style.left = `${event.clientX - offsetX}px`;
      copy.setAttribute("data-draggable", "true");

      document.body.appendChild(copy);
    }

    function onMouseMove(event: MouseEvent) {
      if (copy) {
        // Update the position of the copied element
        copy.style.top = `${event.clientY - offsetY}px`;
        copy.style.left = `${event.clientX - offsetX}px`;
      }
    }

    function onMouseUp() {
      node.style.cursor = "grab";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      if (copy) {
        copy.style.visibility = "hidden"; // Hide the element momentarily
        // Trigger a custom event or logic here to handle dropping if necessary
        // Your drop logic can go here
        document.body.removeChild(copy);
        copy.removeAttribute("data-draggable");
      }
      copy = null;
    }

    node.addEventListener("mousedown", onMouseDown);
    node.style.cursor = "grab";

    return {
      destroy() {
        node.removeEventListener("mousedown", onMouseDown);
        node.style.cursor = "auto";
      }
    };
  }
</script>

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

<style>
  .draggable {
    cursor: grab;
  }
</style>
