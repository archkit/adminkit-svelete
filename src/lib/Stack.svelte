<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    gap?: string;
    children: Snippet;
  }

  let { gap, children, class: className = '', style, ...rest }: Props = $props();

  const cls = $derived(
    ['l-stack', className].filter(Boolean).join(' ')
  );

  const mergedStyle = $derived(
    [gap && `--l-stack-gap: ${gap}`, style].filter(Boolean).join('; ') || undefined
  );
</script>

<div class={cls} style={mergedStyle} {...rest}>
  {@render children()}
</div>
