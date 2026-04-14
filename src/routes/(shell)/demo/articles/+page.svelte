<script lang="ts">
  import { Main, Cluster, Button, Badge, Tag, Modal, Pagination, Search, PageHeader, Fields, Field, Dropdown } from '$lib';
  import NavActions from '../../../../demo/NavActions.svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import Download from 'lucide-svelte/icons/download';
  import MoreHorizontal from 'lucide-svelte/icons/more-horizontal';
  import EditIcon from 'lucide-svelte/icons/edit';
  import Eye from 'lucide-svelte/icons/eye';
  import Copy from 'lucide-svelte/icons/copy';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Undo2 from 'lucide-svelte/icons/undo-2';

  let deleteOpen = $state(false);
  let currentPage = $state(1);
</script>

<Main crumbs={[{label: '記事', href: '#'}, {label: '一覧'}]} width="full">
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <PageHeader title="記事一覧">
    {#snippet actions()}
      <Button variant="ghost" size="small"><Download />エクスポート</Button>
      <a href="/demo/articles/edit" class="c-button primary small"><Plus />新規作成</a>
    {/snippet}
  </PageHeader>

  <!-- フィルタ -->
  <Fields variant="inline" as="form" role="search" aria-label="記事検索">
    <Field label="検索" hidden>
      <Search placeholder="タイトル・本文で検索..." />
    </Field>
    <Field label="カテゴリ" hidden>
      <select>
        <option value="">すべてのカテゴリ</option>
        <option>お知らせ</option>
        <option>ブログ</option>
        <option>ヘルプ</option>
      </select>
    </Field>
    <Field label="ステータス" hidden>
      <select>
        <option value="">すべてのステータス</option>
        <option>公開</option>
        <option>下書き</option>
        <option>アーカイブ</option>
      </select>
    </Field>
    <Button variant="primary" type="submit">検索</Button>
  </Fields>

  <!-- テーブル -->
  <div class="c-table-scroll">
    <table class="c-table" data-js-table-check="article-bulk">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="全選択"></th>
          <th aria-sort="none"><button>タイトル</button></th>
          <th>カテゴリ</th>
          <th>著者</th>
          <th aria-sort="descending"><button>公開日</button></th>
          <th>ステータス</th>
          <th class="num">PV</th>
          <th class="action"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td><a href="/demo/articles">2026年の展望 — テクノロジーと社会の変化</a></td>
          <td><Tag>ブログ</Tag></td>
          <td>田中太郎</td>
          <td>2026-04-10</td>
          <td><Badge variant="success">公開</Badge></td>
          <td class="num">1,284</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/articles/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><a href="/demo/articles" role="menuitem"><Eye />プレビュー</a></li>
                <li role="presentation"><button role="menuitem"><Copy />複製</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td><a href="/demo/articles">新機能のお知らせ: ダッシュボードのリニューアル</a></td>
          <td><Tag>お知らせ</Tag></td>
          <td>佐藤花子</td>
          <td>2026-04-08</td>
          <td><Badge variant="success">公開</Badge></td>
          <td class="num">856</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/articles/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><a href="/demo/articles" role="menuitem"><Eye />プレビュー</a></li>
                <li role="presentation"><button role="menuitem"><Copy />複製</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td><a href="/demo/articles">はじめてのガイド: アカウント設定の手順</a></td>
          <td><Tag>ヘルプ</Tag></td>
          <td>田中太郎</td>
          <td>2026-04-05</td>
          <td><Badge variant="success">公開</Badge></td>
          <td class="num">2,341</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/articles/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><a href="/demo/articles" role="menuitem"><Eye />プレビュー</a></li>
                <li role="presentation"><button role="menuitem"><Copy />複製</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td><a href="/demo/articles">メンテナンスのお知らせ（4月15日）</a></td>
          <td><Tag>お知らせ</Tag></td>
          <td>鈴木一郎</td>
          <td></td>
          <td><Badge>下書き</Badge></td>
          <td class="num">—</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/articles/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><a href="/demo/articles" role="menuitem"><Eye />プレビュー</a></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="選択"></td>
          <td><a href="/demo/articles">APIドキュメント v2 の変更点まとめ</a></td>
          <td><Tag>ブログ</Tag></td>
          <td>佐藤花子</td>
          <td>2026-03-01</td>
          <td><Badge variant="warning">アーカイブ</Badge></td>
          <td class="num">4,120</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/articles/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><button role="menuitem"><Undo2 />復元</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ページネーション -->
  <Pagination total={3} bind:current={currentPage} />

  <!-- 一括操作バー -->
  <div class="c-action-bar sticky" role="toolbar" aria-label="一括操作" data-js-table-check-show="article-bulk" hidden>
    <span><strong>0</strong>件選択中</span>
    <Cluster>
      <button class="c-button small">エクスポート</button>
      <button class="c-button small danger">削除</button>
    </Cluster>
  </div>

  <!-- 削除確認ダイアログ -->
  <Modal bind:open={deleteOpen} label="記事の削除">
    {#snippet header()}<h3>記事の削除</h3>{/snippet}
    <p>この記事を削除してもよろしいですか？この操作は取り消せません。</p>
    {#snippet footer()}
      <Button onclick={() => deleteOpen = false}>キャンセル</Button>
      <Button variant="danger" onclick={() => deleteOpen = false}>削除する</Button>
    {/snippet}
  </Modal>
</Main>
