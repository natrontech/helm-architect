<script lang="ts">
    import { charts } from '$lib/stores/data';
  import { Layers3, Rocket } from 'lucide-svelte';
</script>

<div class="stats shadow flex">

  <div class="stat">
    <div class="stat-figure text-primary">
      <Layers3 class="inline-block w-8 h-8 stroke-current" />
    </div>
    <div class="stat-title">Charts</div>
    <div class="stat-value">{$charts.length}</div>
    <div class="stat-desc">Total</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-primary">
      <Rocket class="inline-block w-8 h-8 stroke-current" />
    </div>
    <div class="stat-title">Revisions</div>
    <div class="stat-value">200</div>
    <div class="stat-desc">Total</div>
  </div>

</div>
