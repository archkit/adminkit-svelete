<script lang="ts">
  type Variant = 'accent' | 'success' | 'warning';

  interface Props {
    variant?: Variant;
    count?: number | string;
  }

  let { variant, count }: Props = $props();

  const cls = $derived(
    ['c-dot', variant, count != null && 'count'].filter(Boolean).join(' ')
  );
</script>

<span class={cls}>{count ?? ''}</span>
