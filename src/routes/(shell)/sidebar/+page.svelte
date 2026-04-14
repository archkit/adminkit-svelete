<script lang="ts">
  import { Main, Section, PageHeader, List } from '$lib';
</script>

<Main crumbs={[{label: 'レイアウト', href: '#'}, {label: 'サイドバー'}]}>
  <PageHeader title="サイドバーレイアウト" />

  <Section heading="概要">
    <p><code>data-layout="sidebar"</code> を使用した標準的な管理画面レイアウトです。左側に固定幅のサイドバー、右側にメインコンテンツを配置します。</p>
  </Section>

  <Section heading="特徴">
    <List>
      <li>デスクトップ: 240px 幅のフルサイドバー</li>
      <li>タブレット: 64px 幅のミニサイドバー（ホバーで展開）</li>
      <li>モバイル: ハンバーガーメニューによるドロワー表示</li>
    </List>
  </Section>

  <Section heading="使い方">
    <pre><code>&lt;div class="shell" data-layout="sidebar"&gt;
  &lt;aside class="shell-sidebar"&gt;...&lt;/aside&gt;
  &lt;div class="shell-main"&gt;
    &lt;main&gt;...&lt;/main&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </Section>
</Main>
