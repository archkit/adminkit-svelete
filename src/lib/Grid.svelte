<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    cols?: 2 | 3 | 4;
    children: Snippet;
  }

  let { cols, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['l-grid', cols && `cols-${cols}`, className].filter(Boolean).join(' ')
  );
</script>

<div class={cls} {...rest}>
  {@render children()}
</div>
