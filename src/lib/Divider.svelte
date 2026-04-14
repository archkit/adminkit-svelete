<script lang="ts">
  interface Props {
    label?: string;
  }

  let { label }: Props = $props();
</script>

{#if label}
  <div class="c-divider" role="separator">{label}</div>
{:else}
  <hr>
{/if}
