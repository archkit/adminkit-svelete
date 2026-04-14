<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    accept?: string;
    multiple?: boolean;
    onchange?: (files: FileList | null) => void;
    children: Snippet;
  }

  let { accept, multiple = false, onchange, children }: Props = $props();

  let dragover = $state(false);

  const cls = $derived(
    ['c-upload', dragover && 'dragover'].filter(Boolean).join(' ')
  );

  function handleDragover(e: DragEvent) {
    e.preventDefault();
    dragover = true;
  }

  function handleDragleave() {
    dragover = false;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    dragover = false;
    onchange?.(e.dataTransfer?.files ?? null);
  }

  function handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    onchange?.(input.files);
  }
</script>

<label
  class={cls}
  ondragover={handleDragover}
  ondragleave={handleDragleave}
  ondrop={handleDrop}
>
  {@render children()}
  <input type="file" {accept} {multiple} onchange={handleChange}>
</label>
