<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    errorMessage?: string;
    hidden?: boolean;
    id?: string;
    children: Snippet;
  }

  let { label, required = false, hint, error, errorMessage, hidden = false, id, children }: Props = $props();

  const generatedId = `field-err-${Math.random().toString(36).slice(2, 9)}`;
  const errorId = $derived(id ? `${id}-error` : errorMessage ? generatedId : undefined);
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
  {:else if errorMessage}
    <small id={errorId} class="error-message">{errorMessage}</small>
  {:else if hint}
    <small>{hint}</small>
  {/if}
</label>
