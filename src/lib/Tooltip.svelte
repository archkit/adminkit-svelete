<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    text: string;
    children: Snippet;
  }

  let { text, children, ...rest }: Props = $props();
</script>

<span data-tooltip={text} {...rest}>
  {@render children()}
</span>
