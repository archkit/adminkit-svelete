<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'success' | 'danger' | 'ghost';
  type Size = 'small';

  interface Props extends HTMLButtonAttributes {
    variant?: Variant;
    size?: Size;
    children: Snippet;
  }

  let { variant, size, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['c-button', variant, size, className].filter(Boolean).join(' ')
  );
</script>

<button class={cls} {...rest}>
  {@render children()}
</button>
