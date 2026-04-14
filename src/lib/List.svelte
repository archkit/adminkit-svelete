<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'bordered' | 'striped' | 'interactive' | 'disc' | 'decimal';

  interface Props {
    variants?: Variant[];
    as?: 'ul' | 'ol';
    class?: string;
    children: Snippet;
    [key: string]: unknown;
  }

  let { variants = [], as = 'ul', children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-list', ...variants, className].filter(Boolean).join(' ')
  );
</script>

{#if as === 'ol'}
  <ol class={cls} {...rest}>
    {@render children()}
  </ol>
{:else}
  <ul class={cls} {...rest}>
    {@render children()}
  </ul>
{/if}
