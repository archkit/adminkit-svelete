<script lang="ts">
  import { Section, Grid, Stats, Badge, ShellTopnav, PageHeader, List, Dot } from '$lib';
  import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
  import PanelTop from 'lucide-svelte/icons/panel-top';
  import Blocks from 'lucide-svelte/icons/blocks';
  import Settings from 'lucide-svelte/icons/settings';
  import Bell from 'lucide-svelte/icons/bell';
  import LogOut from 'lucide-svelte/icons/log-out';
</script>

<a href="#main" class="skip-link">メインコンテンツへ</a>

<ShellTopnav>
  {#snippet nav()}
    <a href="/"><LayoutDashboard />ダッシュボード</a>
    <a href="/topnav" aria-current="page"><PanelTop />トップナビ</a>
    <a href="/components/widgets"><Blocks />コンポーネント</a>
    <a href="/demo/settings"><Settings />設定</a>
  {/snippet}
  {#snippet actions()}
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
    <a href="#" class="c-button ghost small"><LogOut /></a>
  {/snippet}

  <main id="main">
    <div class="l-stack main-content center">
      <PageHeader title="トップナビレイアウト" />

      <Section heading="概要">
        <p><code>data-layout="topnav"</code> を使用したトップナビゲーションレイアウトです。画面上部にナビバーを配置し、コンテンツを全幅で表示します。</p>
      </Section>

      <Section heading="特徴">
        <List>
          <li>ナビゲーション項目が少ない場合に最適</li>
          <li>コンテンツ領域が横幅いっぱいに使える</li>
          <li>公開設定画面やシンプルな管理画面に適している</li>
          <li>モバイル: ナビリンクを非表示にしてハンバーガーメニュー化（JS 制御）</li>
        </List>
      </Section>

      <Section heading="使い方">
        <pre><code>&lt;div class="shell" data-layout="topnav"&gt;
  &lt;header class="shell-topnav"&gt;
    &lt;span class="logo"&gt;Logo&lt;/span&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;リンク&lt;/a&gt;
    &lt;/nav&gt;
    &lt;div class="actions"&gt;...&lt;/div&gt;
  &lt;/header&gt;
  &lt;div class="shell-main"&gt;
    &lt;main&gt;...&lt;/main&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </Section>

      <Section heading="サンプルコンテンツ">
        <Grid cols={4}>
          <Stats label="ユーザー数" value="1,284">{#snippet sub()}前月比 <Badge variant="success">+12.5%</Badge>{/snippet}</Stats>
          <Stats label="注文数" value="568">{#snippet sub()}前月比 <Badge variant="success">+8.2%</Badge>{/snippet}</Stats>
          <Stats label="売上" value="¥3.4M">{#snippet sub()}前月比 <Badge variant="warning">-2.1%</Badge>{/snippet}</Stats>
          <Stats label="CVR" value="3.6%">{#snippet sub()}前月比 <Badge variant="success">+0.4%</Badge>{/snippet}</Stats>
        </Grid>
      </Section>
    </div>
  </main>
</ShellTopnav>
