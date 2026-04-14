<script lang="ts">
  type Size = 'small';

  interface Option {
    value: string;
    label: string;
  }

  interface Props {
    options: Option[];
    value?: string;
    name: string;
    label: string;
    size?: Size;
  }

  let { options, value = $bindable(options[0]?.value), name, label, size }: Props = $props();

  const cls = $derived(
    ['c-segment', size === 'small' && 'small'].filter(Boolean).join(' ')
  );
</script>

<div class={cls} role="radiogroup" aria-label={label}>
  {#each options as option}
    <label>
      <input type="radio" {name} value={option.value} bind:group={value}>
      <span>{option.label}</span>
    </label>
  {/each}
</div>
