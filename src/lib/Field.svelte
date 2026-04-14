<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    hidden?: boolean;
    children: Snippet;
  }

  let { label, required = false, hint, error, hidden = false, children }: Props = $props();
</script>

<label>
  {#if hidden}
    <span class="visually-hidden">{label}</span>
  {:else}
    <span>{label}</span>
  {/if}
  {@render children()}
  {#if error}
    <small class="error">{error}</small>
  {:else if hint}
    <small>{hint}</small>
  {/if}
</label>
