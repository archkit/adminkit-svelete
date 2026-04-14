<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    code: number | string;
    title: string;
    message: string;
    danger?: boolean;
    children?: Snippet;
  }

  let { code, title, message, danger = false, children }: Props = $props();
</script>

<main class="shell-standalone">
  <section class="c-error-page">
    <h1><span class="error-code" class:danger>{code}</span>{title}</h1>
    <p>{message}</p>
    {#if children}
      <div class="l-cluster center">
        {@render children()}
      </div>
    {/if}
  </section>
</main>
