<script lang="ts">
  import { Main, Section, Cluster, ThemeSwitcher, PageHeader, List, Fields, Button, Dot } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
</script>

<Main crumbs={[{label: '設定', href: '#'}, {label: '一般'}]}>
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
  {/snippet}

  <PageHeader title="一般設定" />

  <Section heading="概要">
    <p><code>data-layout="double"</code> を使用したダブルサイドバーレイアウトです。メインサイドバー + サブサイドバーの2段構成で、設定画面などの階層的なナビゲーションに適しています。</p>
  </Section>

  <Section heading="特徴">
    <List>
      <li>メインサイドバー: アプリ全体のナビゲーション</li>
      <li>サブサイドバー: セクション内のページ切り替え</li>
      <li>3カラム Grid レイアウト</li>
    </List>
  </Section>

  <Section heading="サンプルフォーム">
    <Fields>
      <label>
        <span>アプリ名</span>
        <input type="text" value="My Application">
      </label>
      <label>
        <span>説明</span>
        <textarea rows="3" placeholder="アプリの説明..."></textarea>
      </label>
      <label>
        <span>タイムゾーン</span>
        <select>
          <option>Asia/Tokyo (UTC+9)</option>
          <option>America/New_York (UTC-5)</option>
          <option>Europe/London (UTC+0)</option>
        </select>
      </label>
    </Fields>
    <Cluster justify="right">
      <Button variant="primary">保存</Button>
    </Cluster>
  </Section>
</Main>
