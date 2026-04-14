<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Justify = 'center' | 'right';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    justify?: Justify;
    children: Snippet;
  }

  let { justify, children, class: className = '', ...rest }: Props = $props();

  const cls = $derived(
    ['l-cluster', justify, className].filter(Boolean).join(' ')
  );
</script>

<div class={cls} {...rest}>
  {@render children()}
</div>
