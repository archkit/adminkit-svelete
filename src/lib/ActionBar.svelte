<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    count: number;
    sticky?: boolean;
    children: Snippet;
  }

  let { count, sticky = true, children }: Props = $props();

  const cls = $derived(
    ['c-action-bar', sticky && 'sticky'].filter(Boolean).join(' ')
  );
</script>

{#if count > 0}
  <div class={cls} role="toolbar" aria-label="一括操作">
    <span><strong>{count}</strong>件選択中</span>
    <div class="l-cluster">
      {@render children()}
    </div>
  </div>
{/if}
