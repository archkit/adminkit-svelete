<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getHeadingLevel, setHeadingLevel } from './heading-level.js';

  interface Props {
    heading?: string;
    icon?: Snippet;
    children: Snippet;
  }

  let { heading, icon, children }: Props = $props();

  const level = getHeadingLevel() + 1;
  setHeadingLevel(level);
</script>

<div class="c-empty-state">
  {#if icon}{@render icon()}{/if}
  {#if heading}
    {#if level === 2}
      <h2>{heading}</h2>
    {:else if level === 3}
      <h3>{heading}</h3>
    {:else}
      <h4>{heading}</h4>
    {/if}
  {/if}
  {@render children()}
</div>
