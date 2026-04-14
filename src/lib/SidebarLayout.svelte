<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    reverse?: boolean;
    width?: string;
    children: Snippet;
  }

  let { reverse = false, width, children, class: className = '', style, ...rest }: Props = $props();

  const cls = $derived(
    ['l-sidebar', reverse && 'reverse', className].filter(Boolean).join(' ')
  );

  const mergedStyle = $derived(
    [width && `--l-sidebar-w: ${width}`, style].filter(Boolean).join('; ') || undefined
  );
</script>

<div class={cls} style={mergedStyle} {...rest}>
  {@render children()}
</div>
