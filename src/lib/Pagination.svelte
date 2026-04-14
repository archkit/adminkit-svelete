<script lang="ts">
  interface Props {
    current: number;
    total: number;
    href?: (page: number) => string;
    onchange?: (page: number) => void;
  }

  let { current, total, href, onchange }: Props = $props();

  const pages = $derived(Array.from({ length: total }, (_, i) => i + 1));

  function handleClick(page: number, e: MouseEvent) {
    if (onchange) {
      e.preventDefault();
      onchange(page);
    }
  }
</script>

<nav class="c-pagination" aria-label="ページネーション">
  <ul>
    <li>
      {#if current <= 1}
        <span aria-disabled="true">‹</span>
      {:else}
        <a href={href?.(current - 1) ?? '#'} onclick={(e) => handleClick(current - 1, e)}>‹</a>
      {/if}
    </li>
    {#each pages as page}
      <li>
        <a
          href={href?.(page) ?? '#'}
          aria-current={page === current ? 'page' : undefined}
          onclick={(e) => handleClick(page, e)}
        >{page}</a>
      </li>
    {/each}
    <li>
      {#if current >= total}
        <span aria-disabled="true">›</span>
      {:else}
        <a href={href?.(current + 1) ?? '#'} onclick={(e) => handleClick(current + 1, e)}>›</a>
      {/if}
    </li>
  </ul>
</nav>
