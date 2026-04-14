<script lang="ts">
  import { Main, Section, Cluster, Fields, PageHeader, Button } from '$lib';
  import NavActions from '../../../../../demo/NavActions.svelte';
  import Save from 'lucide-svelte/icons/save';
</script>

<Main crumbs={[{label: 'ユーザー管理', href: '/demo/users'}, {label: '編集'}]}>
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <!-- ページヘッダー -->
  <PageHeader title="ユーザー編集">
    {#snippet actions()}
      <Button variant="primary" size="small"><Save />保存</Button>
    {/snippet}
  </PageHeader>

  <form class="contents">
    <Section heading="基本情報">
      <Fields>
        <label>
          <span>名前</span>
          <input type="text" value="田中太郎" required>
        </label>
        <label>
          <span>メールアドレス</span>
          <input type="email" value="tanaka@example.com" required>
        </label>
        <label>
          <span>電話番号</span>
          <input type="tel" value="090-1234-5678">
        </label>
      </Fields>
    </Section>

    <Section heading="権限">
      <Fields>
        <label>
          <span>ロール</span>
          <select>
            <option selected>管理者</option>
            <option>編集者</option>
            <option>閲覧者</option>
          </select>
        </label>
        <label class="toggle">
          <input type="checkbox" checked aria-describedby="account-active-help">
          <span>アカウント有効</span>
          <small id="account-active-help">無効にするとログインできなくなります</small>
        </label>
      </Fields>
    </Section>

    <Section heading="プロフィール">
      <Fields>
        <label>
          <span>自己紹介</span>
          <textarea rows="4">よろしくお願いします。</textarea>
        </label>
        <label>
          <span>アバター</span>
          <input type="file" accept="image/*">
        </label>
      </Fields>
    </Section>

    <!-- アクションバー -->
    <div class="c-action-bar sticky" role="toolbar" aria-label="フォーム操作">
      <Cluster>
        <a href="/demo/users" class="c-button ghost">キャンセル</a>
        <Button variant="primary" type="submit">保存</Button>
      </Cluster>
    </div>
  </form>
</Main>
