<script lang="ts">
  import { Main, Section, ThemeSwitcher, PageHeader, List, Dot } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
</script>

<Main crumbs={[{label: 'レイアウト', href: '#'}, {label: 'フッター付き'}]}>
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
  {/snippet}

  <PageHeader title="フッター付きレイアウト" />

  <Section heading="概要">
    <p><code>shell-main</code> 内、<code>main</code> の<strong>外</strong>に <code>&lt;footer class="shell-footer"&gt;</code> を配置するパターンです。シェルレベルの要素なので action-bar 等の main 内部要素と干渉しません。</p>
  </Section>

  <Section heading="特徴">
    <List>
      <li>shell-main の Grid 2行目（main の外）に配置</li>
      <li>action-bar と独立して動作</li>
      <li>コピーライト、リンク、バージョン情報などに利用</li>
    </List>
  </Section>

  <Section heading="使い方">
    <pre><code>&lt;div class="shell-main"&gt;
  &lt;main&gt;
    &lt;nav class="main-nav"&gt;...&lt;/nav&gt;
    &lt;div class="l-stack main-content"&gt;...&lt;/div&gt;
  &lt;/main&gt;
  &lt;footer class="shell-footer"&gt;
    &lt;p&gt;&copy; 2026 adminkit&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;</code></pre>
  </Section>
</Main>

<footer class="shell-footer">
  <p>&copy; 2026 adminkit. All rights reserved.</p>
  <nav>
    <a href="#">プライバシーポリシー</a>
    <a href="#">利用規約</a>
    <a href="#">お問い合わせ</a>
  </nav>
</footer>
