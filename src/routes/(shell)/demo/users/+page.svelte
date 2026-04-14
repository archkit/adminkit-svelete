<script lang="ts">
  import { Main, Cluster, Button, Badge, Modal, Pagination, PageHeader, Fields, Field, Dropdown } from '$lib';
  import NavActions from '../../../../demo/NavActions.svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import Download from 'lucide-svelte/icons/download';
  import MoreHorizontal from 'lucide-svelte/icons/more-horizontal';
  import Eye from 'lucide-svelte/icons/eye';
  import EditIcon from 'lucide-svelte/icons/edit';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Ellipsis from 'lucide-svelte/icons/ellipsis';
  import Bookmark from 'lucide-svelte/icons/bookmark';
  import Share2 from 'lucide-svelte/icons/share-2';
  import Flag from 'lucide-svelte/icons/flag';

  let deleteOpen = $state(false);
  let currentPage = $state(1);
</script>

<Main crumbs={[{label: 'ユーザー管理', href: '#'}, {label: '一覧'}]} width="full">
  {#snippet actions()}
    <NavActions />
    <Dropdown>
      {#snippet trigger(popoverId)}
        <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu" aria-expanded="false">
          <Ellipsis />
        </button>
      {/snippet}
      {#snippet menu()}
        <li role="presentation"><button role="menuitem"><Bookmark />ブックマーク</button></li>
        <li role="presentation"><button role="menuitem"><Share2 />リンクを共有</button></li>
        <li role="separator"><hr></li>
        <li role="presentation"><button role="menuitem"><Flag />問題を報告</button></li>
      {/snippet}
    </Dropdown>
  {/snippet}

  <!-- ページヘッダー -->
  <PageHeader title="ユーザー一覧">
    {#snippet actions()}
      <Button variant="ghost" size="small"><Download />エクスポート</Button>
      <Button variant="primary" size="small"><Plus />新規作成</Button>
    {/snippet}
  </PageHeader>

  <!-- フィルタ -->
  <Fields variant="inline" as="form" role="search" aria-label="ユーザー検索">
    <Field label="検索" hidden>
      <input type="search" placeholder="名前・メールで検索...">
    </Field>
    <Field label="ロール" hidden>
      <select>
        <option value="">すべてのロール</option>
        <option>管理者</option>
        <option>編集者</option>
        <option>閲覧者</option>
      </select>
    </Field>
    <Field label="ステータス" hidden>
      <select>
        <option value="">すべてのステータス</option>
        <option>有効</option>
        <option>無効</option>
      </select>
    </Field>
    <Button variant="primary" type="submit">検索</Button>
  </Fields>

  <!-- テーブル -->
  <div class="c-table-scroll">
    <table class="c-table" data-js-table-check="user-bulk">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="全選択"></th>
          <th aria-sort="ascending"><button>名前</button></th>
          <th aria-sort="none"><button>メール</button></th>
          <th>ロール</th>
          <th aria-sort="none"><button>登録日</button></th>
          <th>ステータス</th>
          <th class="num">投稿数</th>
          <th class="action"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" aria-label="田中太郎を選択"></td>
          <td><a href="/demo/users">田中太郎</a></td>
          <td>tanaka@example.com</td>
          <td>管理者</td>
          <td>2025-01-15</td>
          <td><Badge variant="success">有効</Badge></td>
          <td class="num">42</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/users" role="menuitem"><Eye />詳細</a></li>
                <li role="presentation"><a href="/demo/users/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><button role="menuitem">権限変更</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="佐藤花子を選択"></td>
          <td><a href="/demo/users">佐藤花子</a></td>
          <td>sato@example.com</td>
          <td>編集者</td>
          <td>2025-03-22</td>
          <td><Badge variant="success">有効</Badge></td>
          <td class="num">18</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/users" role="menuitem"><Eye />詳細</a></li>
                <li role="presentation"><a href="/demo/users/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><button role="menuitem">権限変更</button></li>
                <li role="separator"><hr></li>
                <li role="presentation"><button role="menuitem" class="danger" onclick={() => deleteOpen = true}><Trash2 />削除</button></li>
              {/snippet}
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" aria-label="鈴木一郎を選択"></td>
          <td><a href="/demo/users">鈴木一郎</a></td>
          <td>suzuki@example.com</td>
          <td>閲覧者</td>
          <td>2025-06-10</td>
          <td><Badge variant="warning">無効</Badge></td>
          <td class="num">0</td>
          <td class="action">
            <Dropdown>
              {#snippet trigger(popoverId)}
                <button class="c-button ghost small" popovertarget={popoverId} aria-haspopup="menu"><MoreHorizontal /></button>
              {/snippet}
              {#snippet menu()}
                <li role="presentation"><a href="/demo/users" role="menuitem"><Eye />詳細</a></li>
                <li role="presentation"><a href="/demo/users/edit" role="menuitem"><EditIcon />編集</a></li>
                <li role="presentation"><button role="menuitem">有効化</button></li>
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
  <div class="c-action-bar sticky" role="toolbar" aria-label="一括操作" data-js-table-check-show="user-bulk" hidden>
    <span><strong>0</strong>件選択中</span>
    <Cluster>
      <button class="c-button small">エクスポート</button>
      <button class="c-button small danger">削除</button>
    </Cluster>
  </div>

  <!-- 削除確認ダイアログ -->
  <Modal bind:open={deleteOpen} label="ユーザーの削除">
    {#snippet header()}<h3>ユーザーの削除</h3>{/snippet}
    <p>このユーザーを削除してもよろしいですか？関連するデータもすべて削除されます。</p>
    {#snippet footer()}
      <Button onclick={() => deleteOpen = false}>キャンセル</Button>
      <Button variant="danger" onclick={() => deleteOpen = false}>削除する</Button>
    {/snippet}
  </Modal>
</Main>
