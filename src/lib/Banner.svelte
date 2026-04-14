<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'success' | 'warning' | 'danger';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: Variant;
    dismissible?: boolean;
    children: Snippet;
  }

  let { variant, dismissible = false, children, class: className = '', ...rest }: Props = $props();

  let visible = $state(true);

  const cls = $derived(
    ['c-banner', variant, className].filter(Boolean).join(' ')
  );

  const role = $derived(
    variant === 'danger' || variant === 'warning' ? 'alert' : 'status'
  );
</script>

{#if visible}
  <div class={cls} {role} {...rest}>
    {@render children()}
    {#if dismissible}
      <button class="c-button ghost small" onclick={() => visible = false} aria-label="閉じる">✕</button>
    {/if}
  </div>
{/if}
