<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getHeadingLevel, setHeadingLevel } from './heading-level.js';

  interface Props extends HTMLAttributes<HTMLElement> {
    heading: string;
    hideHeading?: boolean;
    children: Snippet;
  }

  let { heading, hideHeading = false, children, class: className = '', ...rest }: Props = $props();

  const level = getHeadingLevel() + 1;
  setHeadingLevel(level);
</script>

<section class={className || undefined} {...rest}>
  {#if level === 2}
    <h2 class={hideHeading ? 'visually-hidden' : undefined}>{heading}</h2>
  {:else if level === 3}
    <h3 class={hideHeading ? 'visually-hidden' : undefined}>{heading}</h3>
  {:else if level === 4}
    <h4 class={hideHeading ? 'visually-hidden' : undefined}>{heading}</h4>
  {:else if level === 5}
    <h5 class={hideHeading ? 'visually-hidden' : undefined}>{heading}</h5>
  {:else}
    <h6 class={hideHeading ? 'visually-hidden' : undefined}>{heading}</h6>
  {/if}
  {@render children()}
</section>
