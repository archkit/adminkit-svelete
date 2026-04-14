<script lang="ts">
  import type { Snippet } from 'svelte';

  type Width = 'narrow' | 'wide';

  interface Props {
    width?: Width;
    children: Snippet;
  }

  let { width, children }: Props = $props();

  const cls = $derived(
    ['shell-standalone', width].filter(Boolean).join(' ')
  );
</script>

<main class={cls}>
  {@render children()}
</main>
