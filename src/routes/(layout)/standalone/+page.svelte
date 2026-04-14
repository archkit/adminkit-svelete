<script lang="ts">
  import { Section, ShellStandalone, List, Fields, Button } from '$lib';
</script>

<ShellStandalone>
  <div>
    <h1>スタンドアロンレイアウト</h1>

    <Section heading="概要">
      <p><code>.shell-standalone</code> を使用した中央配置レイアウトです。ログイン画面やシンプルなフォーム画面に適しています。</p>
    </Section>

    <Section heading="幅バリアント">
      <List>
        <li><code>.narrow</code> — max-width: 20rem</li>
        <li>デフォルト — max-width: 24rem</li>
        <li><code>.wide</code> — max-width: 32rem</li>
      </List>
    </Section>

    <Section heading="使い方">
      <pre><code>&lt;main class="shell-standalone"&gt;
  &lt;form&gt;...&lt;/form&gt;
&lt;/main&gt;

&lt;!-- 幅バリアント --&gt;
&lt;main class="shell-standalone narrow"&gt;...&lt;/main&gt;
&lt;main class="shell-standalone wide"&gt;...&lt;/main&gt;</code></pre>
    </Section>

    <Section heading="サンプルフォーム">
      <Fields as="form" data-js-prevent-submit>
        <label>
          <span>メールアドレス</span>
          <input type="email" placeholder="you@example.com">
        </label>
        <label>
          <span>パスワード</span>
          <input type="password" placeholder="パスワード">
        </label>
        <Button type="submit" variant="primary" class="full">ログイン</Button>
      </Fields>
    </Section>

    <p><a href="/">ダッシュボードに戻る</a></p>
  </div>
</ShellStandalone>
