<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    compact?: boolean;
    auto?: boolean;
    selectable?: boolean;
    selected?: Set<string>;
    children: Snippet;
  }

  let { compact = false, auto = false, selectable = false, selected = $bindable(new Set()), children }: Props = $props();

  const cls = $derived(
    ['c-table', compact && 'compact', auto && 'auto'].filter(Boolean).join(' ')
  );
</script>

<div class="c-table-scroll">
  <table class={cls}>
    {@render children()}
  </table>
</div>
