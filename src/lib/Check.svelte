<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    label: string;
    hint?: string;
  }

  let { label, hint, type = 'checkbox', ...rest }: Props = $props();
</script>

<label class="check">
  <input {type} {...rest}>
  <span>{label}</span>
  {#if hint}
    <small>{hint}</small>
  {/if}
</label>
