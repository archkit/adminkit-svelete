<script lang="ts">
  type Shape = 'text' | 'circle';

  interface Props {
    shape?: Shape;
    width?: string;
    height?: string;
  }

  let { shape, width, height }: Props = $props();

  const cls = $derived(
    ['c-skeleton', shape].filter(Boolean).join(' ')
  );

  const style = $derived(
    [width && `--w: ${width}`, height && `--h: ${height}`].filter(Boolean).join('; ') || undefined
  );
</script>

<span class={cls} {style} aria-label="読み込み中"></span>
