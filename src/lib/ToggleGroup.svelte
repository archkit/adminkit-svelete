<script lang="ts">
  import type { Snippet } from 'svelte';

  type Size = 'small';

  interface Option {
    value: string;
    label: string;
    icon?: Snippet;
  }

  interface Props {
    options: Option[];
    value?: string;
    label: string;
    size?: Size;
  }

  let { options, value = $bindable(options[0]?.value), label, size }: Props = $props();

  const cls = $derived(
    ['c-toggle-group', size === 'small' && 'small'].filter(Boolean).join(' ')
  );
</script>

<div class={cls} role="group" aria-label={label}>
  {#each options as option}
    <button
      aria-pressed={option.value === value ? 'true' : 'false'}
      onclick={() => value = option.value}
    >
      {#if option.icon}{@render option.icon()}{/if}{option.label}
    </button>
  {/each}
</div>
