<script lang="ts">
  type Size = 'small' | 'large';

  interface Props {
    label: string;
    initial: string;
    size?: Size;
  }

  let { label, initial, size }: Props = $props();

  const cls = $derived(
    ['c-avatar', size].filter(Boolean).join(' ')
  );
</script>

<span class={cls} aria-label={label}>{initial}</span>
