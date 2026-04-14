<script lang="ts">
  interface Props {
    label: string;
    hint?: string;
    checked?: boolean;
  }

  let { label, hint, checked = $bindable(false) }: Props = $props();
</script>

<label class="toggle">
  <input type="checkbox" role="switch" bind:checked>
  <span>{label}</span>
  {#if hint}
    <small>{hint}</small>
  {/if}
</label>
