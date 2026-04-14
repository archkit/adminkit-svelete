<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getHeadingLevel, setHeadingLevel } from './heading-level.js';

  interface Props {
    label: string;
    value: string;
    sub?: Snippet;
    accent?: boolean;
    icon?: Snippet;
  }

  let { label, value, sub, accent = false, icon }: Props = $props();

  const cls = $derived(
    ['c-stats', accent && 'accent', icon && 'with-icon'].filter(Boolean).join(' ')
  );

  const level = getHeadingLevel() + 1;
  setHeadingLevel(level);
</script>

<div class={cls}>
  {#if icon}
    <div class="c-stats-icon">{@render icon()}</div>
    <div class="c-stats-body">
      {#if level === 2}<h2>{label}</h2>{:else if level === 3}<h3>{label}</h3>{:else}<h4>{label}</h4>{/if}
      <span class="c-stats-value">{value}</span>
      {#if sub}<span class="c-stats-sub">{@render sub()}</span>{/if}
    </div>
  {:else}
    {#if level === 2}<h2>{label}</h2>{:else if level === 3}<h3>{label}</h3>{:else}<h4>{label}</h4>{/if}
    <span class="c-stats-value">{value}</span>
    {#if sub}<span class="c-stats-sub">{@render sub()}</span>{/if}
  {/if}
</div>
