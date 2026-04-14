<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getHeadingLevel, setHeadingLevel } from './heading-level.js';

  type Variant = 'danger';

  interface Props extends HTMLAttributes<HTMLElement> {
    heading?: string;
    variant?: Variant;
    children: Snippet;
  }

  let { heading, variant, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-card', variant, className].filter(Boolean).join(' ')
  );

  const level = getHeadingLevel() + 1;
  setHeadingLevel(level);
</script>

<section class={cls} {...rest}>
  {#if heading}
    {#if level === 2}
      <h2>{heading}</h2>
    {:else if level === 3}
      <h3>{heading}</h3>
    {:else if level === 4}
      <h4>{heading}</h4>
    {:else}
      <h5>{heading}</h5>
    {/if}
  {/if}
  {@render children()}
</section>
