<script lang="ts">
  import type { Snippet } from 'svelte';
  import House from 'lucide-svelte/icons/house';

  interface Crumb {
    label: string;
    href?: string;
  }

  interface Props {
    crumbs?: Crumb[];
    home?: string;
  }

  let { crumbs = [], home = '/' }: Props = $props();
</script>

<ol class="c-breadcrumb">
  <li><a href={home} aria-label="ダッシュボード"><House /></a></li>
  {#each crumbs as crumb, i}
    {#if i === crumbs.length - 1}
      <li aria-current="page">{crumb.label}</li>
    {:else}
      <li><a href={crumb.href ?? '#'}>{crumb.label}</a></li>
    {/if}
  {/each}
</ol>
