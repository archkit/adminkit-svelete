<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'primary' | 'success' | 'warning' | 'danger';

  interface Props {
    variant?: Variant;
    ondismiss?: () => void;
    children: Snippet;
  }

  let { variant, ondismiss, children }: Props = $props();

  const cls = $derived(
    ['c-tag', variant].filter(Boolean).join(' ')
  );
</script>

<span class={cls}>
  {@render children()}
  {#if ondismiss}
    <button type="button" onclick={ondismiss} aria-label="削除">✕</button>
  {/if}
</span>
