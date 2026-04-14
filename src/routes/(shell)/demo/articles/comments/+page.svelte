<script lang="ts">
  import { Main, Cluster, Badge, Pagination, PageHeader } from '$lib';
  import NavActions from '../../../../../demo/NavActions.svelte';
  import CheckIcon from 'lucide-svelte/icons/check';
  import Trash2 from 'lucide-svelte/icons/trash-2';

  let currentPage = $state(1);
</script>

<Main crumbs={[{label: '記事', href: '#'}, {label: 'コメント'}]} width="full">
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <PageHeader title="コメント">
    {#snippet actions()}
      <Badge>8件の未承認</Badge>
    {/snippet}
  </PageHeader>

  <!-- フィルタ -->
  <Cluster>
    <div class="c-toggle-group" role="group" aria-label="コメントフィルタ">
      <button aria-pressed="true">すべて <Badge>42</Badge></button>
      <button aria-pressed="false">未承認 <Badge variant="warning">8</Badge></button>
      <button aria-pressed="false">承認済み <Badge variant="success">31</Badge></button>
      <button aria-pressed="false">スパム <Badge variant="danger">3</Badge></button>
    </div>
  </Cluster>

  <!-- テーブル -->
  <div class="c-table-scroll">
    <table class="c-table" data-js-table-check="comment-bulk">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="全選択"></th>
          <th>投稿者</th>
          <th>コメント</th>
          <th>記事</th>
          <th>日時</th>
          <th>ステータス</th>
          <th class="action"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td>山田次郎</td>
          <td>素晴らしい記事ですね。参考になりました。</td>
          <td><a href="/demo/articles">2026年の展望 — テクノロジーと社会の変化</a></td>
          <td>2026-04-11 14:32</td>
          <td><Badge variant="warning">未承認</Badge></td>
          <td class="action">
            <button class="c-button ghost small success" title="承認"><CheckIcon /></button>
            <button class="c-button ghost small danger" title="削除"><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td>高橋美咲</td>
          <td>とても分かりやすい説明でした。次の記事も楽しみにしています。</td>
          <td><a href="/demo/articles">はじめてのガイド: アカウント設定の手順</a></td>
          <td>2026-04-11 10:15</td>
          <td><Badge variant="success">承認済み</Badge></td>
          <td class="action">
            <button class="c-button ghost small danger" title="削除"><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td>佐々木健</td>
          <td>このあたりについてもう少し詳しく解説していただけると嬉しいです。</td>
          <td><a href="/demo/articles">2026年の展望 — テクノロジーと社会の変化</a></td>
          <td>2026-04-10 22:08</td>
          <td><Badge variant="warning">未承認</Badge></td>
          <td class="action">
            <button class="c-button ghost small success" title="承認"><CheckIcon /></button>
            <button class="c-button ghost small danger" title="削除"><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td>中村由美</td>
          <td>ダッシュボードの新しいUIとても使いやすいです！</td>
          <td><a href="/demo/articles">新機能のお知らせ: ダッシュボードのリニューアル</a></td>
          <td>2026-04-10 16:44</td>
          <td><Badge variant="success">承認済み</Badge></td>
          <td class="action">
            <button class="c-button ghost small danger" title="削除"><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td>spam_bot_42</td>
          <td>Buy cheap products at example-spam.com now!!!</td>
          <td><a href="/demo/articles">2026年の展望 — テクノロジーと社会の変化</a></td>
          <td>2026-04-10 03:21</td>
          <td><Badge variant="danger">スパム</Badge></td>
          <td class="action">
            <button class="c-button ghost small danger" title="削除"><Trash2 /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ページネーション -->
  <Pagination total={2} bind:current={currentPage} />

  <!-- 一括操作バー -->
  <div class="c-action-bar sticky" role="toolbar" aria-label="一括操作" data-js-table-check-show="comment-bulk" hidden>
    <span><strong>0</strong>件選択中</span>
    <Cluster>
      <button class="c-button small success">承認</button>
      <button class="c-button small">スパム</button>
      <button class="c-button small danger">削除</button>
    </Cluster>
  </div>
</Main>
