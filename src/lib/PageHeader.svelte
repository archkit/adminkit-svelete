<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    actions?: Snippet;
  }

  let { title, actions }: Props = $props();
</script>

<header class="page-header">
  <h1>{title}</h1>
  {#if actions}
    <div class="l-cluster">
      {@render actions()}
    </div>
  {/if}
</header>
