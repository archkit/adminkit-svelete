<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'bordered' | 'striped' | 'horizontal';

  interface Props extends HTMLAttributes<HTMLDListElement> {
    variants?: Variant[];
    children: Snippet;
  }

  let { variants = [], children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-dl', ...variants, className].filter(Boolean).join(' ')
  );
</script>

<dl class={cls} {...rest}>
  {@render children()}
</dl>
