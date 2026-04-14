<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    id: string;
    trigger: Snippet;
    children: Snippet;
  }

  let { id, trigger, children }: Props = $props();
</script>

<div class="c-dropdown">
  {@render trigger()}
  {@render children()}
</div>
