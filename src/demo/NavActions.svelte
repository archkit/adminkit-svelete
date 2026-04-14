<script lang="ts">
  import { ThemeSwitcher, Dot } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
  import CircleHelp from 'lucide-svelte/icons/circle-help';
</script>

<div class="l-cluster">
  <ThemeSwitcher />
  <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
  <a href="#" class="c-button ghost small"><CircleHelp /></a>
</div>
