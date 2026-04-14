<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'success' | 'warning' | 'danger';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: Variant;
    children: Snippet;
  }

  let { variant, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-alert', variant, className].filter(Boolean).join(' ')
  );
</script>

<div class={cls} role="alert" {...rest}>
  {@render children()}
</div>
