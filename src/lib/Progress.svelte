<script lang="ts">
  type Variant = 'success' | 'warning' | 'danger';

  interface Props {
    value: number;
    max?: number;
    variant?: Variant;
    pageTop?: boolean;
    label: string;
    showLabel?: boolean;
  }

  let { value, max = 100, variant, pageTop = false, label, showLabel = false }: Props = $props();

  const cls = $derived(
    ['c-progress', variant, pageTop && 'page-top'].filter(Boolean).join(' ')
  );

  const percentage = $derived(Math.round((value / max) * 100));
</script>

{#if showLabel}
  <div class="c-progress-labeled">
    <progress class={cls} {value} {max} aria-label={label}></progress>
    <span>{percentage}%</span>
  </div>
{:else}
  <progress class={cls} {value} {max} aria-label={label}></progress>
{/if}
