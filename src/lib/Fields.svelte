<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'horizontal' | 'inline';

  interface Props {
    variant?: Variant;
    as?: 'div' | 'form';
    class?: string;
    children: Snippet;
    [key: string]: unknown;
  }

  let { variant, as = 'div', children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-fields', variant, className].filter(Boolean).join(' ')
  );
</script>

{#if as === 'form'}
  <form class={cls} {...rest}>
    {@render children()}
  </form>
{:else}
  <div class={cls} {...rest}>
    {@render children()}
  </div>
{/if}
