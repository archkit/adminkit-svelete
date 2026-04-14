<script lang="ts">
  import { page } from '$app/state';
  import { Shell, Dot, Badge } from '$lib';
  import LayoutDashboardIcon from 'lucide-svelte/icons/layout-dashboard';
  import LayoutGridIcon from 'lucide-svelte/icons/layout-grid';
  import ComponentIcon from 'lucide-svelte/icons/component';
  import PuzzleIcon from 'lucide-svelte/icons/puzzle';
  import LogOutIcon from 'lucide-svelte/icons/log-out';
  import FileTextIcon from 'lucide-svelte/icons/file-text';
  import UsersIcon from 'lucide-svelte/icons/users';
  import SettingsIcon from 'lucide-svelte/icons/settings';
  import UserCircleIcon from 'lucide-svelte/icons/user-circle';
  import ListIcon from 'lucide-svelte/icons/list';
  import PlusIcon from 'lucide-svelte/icons/plus';
  import TagIcon from 'lucide-svelte/icons/tag';
  import MessageSquareIcon from 'lucide-svelte/icons/message-square';
  import PanelLeftIcon from 'lucide-svelte/icons/panel-left';
  import PanelLeftCloseIcon from 'lucide-svelte/icons/panel-left-close';
  import PanelTopIcon from 'lucide-svelte/icons/panel-top';
  import RectangleHorizontalIcon from 'lucide-svelte/icons/rectangle-horizontal';
  import Columns2Icon from 'lucide-svelte/icons/columns-2';
  import PanelBottomIcon from 'lucide-svelte/icons/panel-bottom';
  import AlertTriangleIcon from 'lucide-svelte/icons/alert-triangle';
  import LogInIcon from 'lucide-svelte/icons/log-in';

  let { children } = $props();

  function current(href: string) {
    const path = page.url.pathname;
    if (href === '/') return path === '/' ? 'page' : undefined;
    return path === href || path.startsWith(href + '/') ? 'page' : undefined;
  }
</script>

<a href="#main" class="skip-link">メインコンテンツへ</a>

<Shell title="adminkit">
  {#snippet nav()}
    <ul>
      <li><a href="/" aria-current={current('/')}><LayoutDashboardIcon /><span>ダッシュボード</span><Dot /></a></li>
    </ul>

    <div role="group" aria-labelledby="nav-components">
      <span class="label" id="nav-components">コンポーネント</span>
      <ul>
        <li><a href="/components/layouts" aria-current={current('/components/layouts')}><LayoutGridIcon /><span>レイアウト</span></a></li>
        <li><a href="/components/modules" aria-current={current('/components/modules')}><ComponentIcon /><span>モジュール</span></a></li>
        <li><a href="/components/widgets" aria-current={current('/components/widgets')}><PuzzleIcon /><span>ウィジェット</span></a></li>
      </ul>
    </div>

    <div role="group" aria-labelledby="nav-svelte">
      <span class="label" id="nav-svelte">Svelte コンポーネント</span>
      <ul>
        <li><a href="/svelte/data-table" aria-current={current('/svelte/data-table')}><ComponentIcon /><span>DataTable</span></a></li>
      </ul>
    </div>

    <div role="group" aria-labelledby="nav-pages">
      <span class="label" id="nav-pages">デモページ</span>
      <ul>
        <li>
          <details open={page.url.pathname.startsWith('/demo/articles')}>
            <summary><FileTextIcon /><span>記事</span></summary>
            <ul>
              <li><a href="/demo/articles" aria-current={current('/demo/articles')}><ListIcon /><span>一覧</span></a></li>
              <li><a href="/demo/articles/edit" aria-current={current('/demo/articles/edit')}><PlusIcon /><span>新規追加</span></a></li>
              <li><a href="/demo/articles/categories" aria-current={current('/demo/articles/categories')}><TagIcon /><span>カテゴリ</span></a></li>
              <li><a href="/demo/articles/comments" aria-current={current('/demo/articles/comments')}><MessageSquareIcon /><span>コメント</span><Badge variant="danger">8</Badge></a></li>
            </ul>
          </details>
        </li>
        <li>
          <details open={page.url.pathname.startsWith('/demo/users')}>
            <summary><UsersIcon /><span>ユーザー</span></summary>
            <ul>
              <li><a href="/demo/users" aria-current={current('/demo/users')}><ListIcon /><span>一覧</span></a></li>
              <li><a href="/demo/users/edit" aria-current={current('/demo/users/edit')}><PlusIcon /><span>新規追加</span></a></li>
            </ul>
          </details>
        </li>
        <li><a href="/demo/settings" aria-current={current('/demo/settings')}><SettingsIcon /><span>一般設定</span><Badge variant="warning">3</Badge></a></li>
        <li><a href="/demo/profile" aria-current={current('/demo/profile')}><UserCircleIcon /><span>プロフィール</span></a></li>
      </ul>
    </div>

    <div role="group" aria-labelledby="nav-layouts">
      <span class="label" id="nav-layouts">レイアウト</span>
      <ul>
        <li><a href="/sidebar" aria-current={current('/sidebar')}><PanelLeftIcon /><span>サイドバー</span></a></li>
        <li><a href="/mini" aria-current={current('/mini')}><PanelLeftCloseIcon /><span>ミニサイドバー</span></a></li>
        <li><a href="/topnav" aria-current={current('/topnav')}><PanelTopIcon /><span>トップナビ</span></a></li>
        <li><a href="/standalone" aria-current={current('/standalone')}><RectangleHorizontalIcon /><span>スタンドアロン</span></a></li>
        <li><a href="/double" aria-current={current('/double')}><Columns2Icon /><span>ダブルサイドバー</span></a></li>
        <li><a href="/footer" aria-current={current('/footer')}><PanelBottomIcon /><span>フッター付き</span></a></li>
        <li><a href="/error" aria-current={current('/error')}><AlertTriangleIcon /><span>エラーページ</span></a></li>
        <li><a href="/login" aria-current={current('/login')}><LogInIcon /><span>ログイン</span></a></li>
      </ul>
    </div>
  {/snippet}

  {#snippet sidebarFooter()}
    <a href="/"><LogOutIcon /><span>ログアウト</span></a>
  {/snippet}

  {@render children()}
</Shell>
