<script lang="ts">
  import { Main, Section, Cluster, Button, Card, Fields, Toggle, PageHeader, ThemeSwitcher, Dot } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
  import CircleHelp from 'lucide-svelte/icons/circle-help';
</script>

<Main crumbs={[{label: '設定', href: '#'}, {label: '一般設定'}]}>
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
    <a href="#" class="c-button ghost small"><CircleHelp /></a>
  {/snippet}

  <PageHeader title="一般設定" />

  <form class="contents">
    <Section heading="サイト情報">
      <Fields variant="horizontal">
        <label><span>サイト名</span><input type="text" value="My Application"></label>
        <label><span>サイトURL</span><input type="url" value="https://example.com"></label>
      </Fields>
    </Section>

    <Section heading="通知設定">
      <Fields>
        <Toggle label="メール通知" hint="重要な更新をメールで受け取ります" checked />
        <Toggle label="Slack通知" hint="Slackチャンネルに通知を送信します" />
      </Fields>
    </Section>

    <Section heading="危険な操作">
      <Card variant="danger">
        <h3>アカウント削除</h3>
        <p>アカウントを削除すると、すべてのデータが完全に消去されます。この操作は取り消せません。</p>
        <Button variant="danger">アカウントを削除する</Button>
      </Card>
    </Section>

    <Cluster justify="right">
      <Button variant="primary">保存</Button>
    </Cluster>
  </form>
</Main>
