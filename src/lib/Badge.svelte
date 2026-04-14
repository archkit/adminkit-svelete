<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'success' | 'warning' | 'danger';

  interface Props extends HTMLAttributes<HTMLSpanElement> {
    variant?: Variant;
    children: Snippet;
  }

  let { variant, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-badge', variant, className].filter(Boolean).join(' ')
  );
</script>

<span class={cls} {...rest}>
  {@render children()}
</span>
