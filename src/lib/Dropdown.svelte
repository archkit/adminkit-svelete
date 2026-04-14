<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    trigger: Snippet<[string]>;
    menu: Snippet;
  }

  let { trigger, menu }: Props = $props();

  const id = `dropdown-${Math.random().toString(36).slice(2, 9)}`;
</script>

<div class="c-dropdown">
  {@render trigger(id)}
  <ul popover {id} role="menu">
    {@render menu()}
  </ul>
</div>
