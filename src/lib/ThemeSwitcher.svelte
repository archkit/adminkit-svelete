<script lang="ts">
  import Moon from 'lucide-svelte/icons/moon';
  import Sun from 'lucide-svelte/icons/sun';
  import Palette from 'lucide-svelte/icons/palette';

  const isBrowser = typeof window !== 'undefined';

  let themeStyle = $state('ink');
  let themeMode = $state('light');

  if (isBrowser) {
    themeStyle = document.documentElement.dataset.themeStyle || localStorage.getItem('theme-style') || 'ink';
    themeMode = document.documentElement.dataset.themeMode || localStorage.getItem('theme-mode') || 'light';
    applyTheme();
  }

  function applyTheme() {
    if (!isBrowser) return;
    document.documentElement.dataset.themeStyle = themeStyle;
    document.documentElement.dataset.themeMode = themeMode;
    localStorage.setItem('theme-style', themeStyle);
    localStorage.setItem('theme-mode', themeMode);
  }

  function toggleMode() {
    themeMode = themeMode === 'dark' ? 'light' : 'dark';
    applyTheme();
  }

  function setStyle(value: string) {
    themeStyle = value;
    applyTheme();
  }

  function setMode(value: string) {
    themeMode = value;
    applyTheme();
  }
</script>

<button class="c-button ghost small" onclick={toggleMode} aria-label="テーマ切替">
  {#if themeMode === 'dark'}<Sun />{:else}<Moon />{/if}
</button>
<div class="c-dropdown">
  <button class="c-button ghost small" popovertarget="theme-menu" aria-haspopup="menu">
    <Palette />
  </button>
  <div popover id="theme-menu" role="menu" class="theme-menu">
    <div class="theme-menu-label">テーマ</div>
    <div class="c-segment" role="radiogroup" aria-label="テーマスタイル">
      {#each ['ink', 'stone', 'dusk', 'volt'] as style}
        <label>
          <input type="radio" name="theme-style" value={style} checked={themeStyle === style} onchange={() => setStyle(style)}>
          <span>{style.charAt(0).toUpperCase() + style.slice(1)}</span>
        </label>
      {/each}
    </div>
    <div class="theme-menu-label">モード</div>
    <div class="c-segment" role="radiogroup" aria-label="テーマモード">
      {#each ['light', 'dark'] as mode}
        <label>
          <input type="radio" name="theme-mode" value={mode} checked={themeMode === mode} onchange={() => setMode(mode)}>
          <span>{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
        </label>
      {/each}
    </div>
  </div>
</div>
