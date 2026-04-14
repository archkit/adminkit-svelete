<script lang="ts">
  interface Step {
    label: string;
    state?: 'done' | 'active';
  }

  interface Props {
    steps: Step[];
  }

  let { steps }: Props = $props();
</script>

<ol class="c-stepper">
  {#each steps as step}
    <li class={step.state ?? ''}>{step.label}</li>
  {/each}
</ol>
