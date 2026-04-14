<script lang="ts">
  import { Main, Section, Cluster, Button, Avatar, Card, Fields, Toggle, Tabs, PageHeader, ThemeSwitcher, Dot } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
</script>

<Main crumbs={[{label: 'プロフィール'}]}>
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
  {/snippet}

  <PageHeader title="プロフィール" />

  <section class="c-card profile-card">
    <Avatar label="田中太郎" initial="田" size="large" />
    <h2>田中太郎</h2>
    <p>管理者 &middot; tanaka@example.com</p>
  </section>

  <Tabs
    label="プロフィールタブ"
    tabs={[
      { id: 'account', label: 'アカウント', content: accountTab },
      { id: 'security', label: 'セキュリティ', content: securityTab },
      { id: 'notifications', label: '通知', content: notificationsTab }
    ]}
  />
</Main>

{#snippet accountTab()}
  <form class="l-stack">
    <Section heading="基本情報">
      <Fields variant="horizontal">
        <label><span>名前</span><input type="text" value="田中太郎"></label>
        <label><span>メールアドレス</span><input type="email" value="tanaka@example.com"></label>
        <label><span>電話番号</span><input type="tel" value="090-1234-5678"></label>
      </Fields>
    </Section>
    <Section heading="プロフィール">
      <Fields>
        <label><span>自己紹介</span><textarea placeholder="自己紹介を入力..." rows="4"></textarea></label>
        <label><span>ウェブサイト</span><input type="url" placeholder="https://..."></label>
      </Fields>
    </Section>
    <Cluster justify="right">
      <Button variant="primary">保存</Button>
    </Cluster>
  </form>
{/snippet}

{#snippet securityTab()}
  <form class="l-stack">
    <Section heading="パスワード変更">
      <Fields>
        <label><span>現在のパスワード</span><input type="password" placeholder="現在のパスワード"></label>
        <label><span>新しいパスワード</span><input type="password" placeholder="新しいパスワード"><small>8文字以上、英数字を含めてください</small></label>
        <label><span>確認</span><input type="password" placeholder="もう一度入力"></label>
      </Fields>
    </Section>
    <Cluster justify="right">
      <Button variant="primary">パスワードを変更</Button>
    </Cluster>
    <Section heading="二要素認証">
      <Card>
        <h3>認証アプリ</h3>
        <p>Google Authenticator や Authy 等の認証アプリを使用します。</p>
        <div><Button size="small">設定する</Button></div>
      </Card>
    </Section>
  </form>
{/snippet}

{#snippet notificationsTab()}
  <form class="l-stack">
    <Section heading="通知設定">
      <Fields>
        <Toggle label="メール通知" hint="重要な更新をメールで受け取ります" checked />
        <Toggle label="セキュリティアラート" hint="不審なログインを検知した場合に通知します" checked />
        <Toggle label="マーケティング" hint="新機能やキャンペーンの案内を受け取ります" />
        <Toggle label="週次レポート" hint="毎週月曜日にアクティビティレポートを送信します" checked />
      </Fields>
    </Section>
    <Cluster justify="right">
      <Button variant="primary">保存</Button>
    </Cluster>
  </form>
{/snippet}
