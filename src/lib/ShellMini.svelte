<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string;
    nav: Snippet;
    sidebarFooter?: Snippet;
    shellFooter?: Snippet;
    children: Snippet;
  }

  let { title = 'adminkit', nav, sidebarFooter, shellFooter, children }: Props = $props();
</script>

<div class="shell" data-layout="mini">
  <aside class="shell-sidebar">
    <header>
      <span>{title}</span>
    </header>
    <nav aria-label="サイドバー">
      {@render nav()}
    </nav>
    {#if sidebarFooter}
      <footer>
        {@render sidebarFooter()}
      </footer>
    {/if}
  </aside>

  <div class="shell-main">
    {@render children()}
    {#if shellFooter}
      <footer class="shell-footer">
        {@render shellFooter()}
      </footer>
    {/if}
  </div>
</div>
