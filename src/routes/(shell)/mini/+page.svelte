<script lang="ts">
  import { Main, Section, Grid, Stats, PageHeader, List } from '$lib';
</script>

<Main crumbs={[{label: 'レイアウト', href: '#'}, {label: 'ミニサイドバー'}]}>
  <PageHeader title="ミニサイドバーレイアウト" />

  <Section heading="概要">
    <p><code>data-layout="mini"</code> を使用したコンパクトなサイドバーレイアウトです。アイコンのみを常時表示し、ホバーで展開します。</p>
  </Section>

  <Section heading="特徴">
    <List>
      <li>デスクトップ: 64px 幅のアイコンサイドバー</li>
      <li>ホバー時にラベルが表示され、不透明背景で重なる</li>
      <li>モバイル: 通常のサイドバーと同様にドロワー表示</li>
      <li>コンテンツ領域を最大化したい場合に最適</li>
    </List>
  </Section>

  <Section heading="使い方">
    <pre><code>&lt;div class="shell" data-layout="mini"&gt;
  &lt;aside class="shell-sidebar"&gt;...&lt;/aside&gt;
  &lt;div class="shell-main"&gt;
    &lt;main&gt;...&lt;/main&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
  </Section>

  <Section heading="サンプルコンテンツ">
    <Grid cols={3}>
      <Stats label="アクティブユーザー" value="842" />
      <Stats label="セッション" value="2,451" />
      <Stats label="直帰率" value="32.4%" />
    </Grid>
  </Section>
</Main>
