<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    legend?: string;
    horizontal?: boolean;
    children: Snippet;
  }

  let { legend, horizontal = false, children }: Props = $props();

  const listCls = $derived(
    ['check-group', horizontal && 'horizontal'].filter(Boolean).join(' ')
  );
</script>

{#if legend}
  <fieldset>
    <legend>{legend}</legend>
    <ul class={listCls}>
      {@render children()}
    </ul>
  </fieldset>
{:else}
  <ul class={listCls}>
    {@render children()}
  </ul>
{/if}
