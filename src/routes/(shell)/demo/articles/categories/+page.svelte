<script lang="ts">
  import { Main, Button, Modal, PageHeader, Fields } from '$lib';
  import NavActions from '../../../../../demo/NavActions.svelte';
  import Plus from 'lucide-svelte/icons/plus';
  import EditIcon from 'lucide-svelte/icons/edit';
  import Trash2 from 'lucide-svelte/icons/trash-2';

  let editOpen = $state(false);
  let deleteOpen = $state(false);
</script>

<Main crumbs={[{label: '記事', href: '#'}, {label: 'カテゴリ'}]} width="full">
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <PageHeader title="カテゴリ">
    {#snippet actions()}
      <Button variant="primary" size="small" onclick={() => editOpen = true}><Plus />新規追加</Button>
    {/snippet}
  </PageHeader>

  <!-- テーブル -->
  <div class="c-table-scroll">
    <table class="c-table">
      <thead>
        <tr>
          <th>名前</th>
          <th>スラッグ</th>
          <th class="num">記事数</th>
          <th class="action"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">お知らせ</a></td>
          <td><code>news</code></td>
          <td class="num">12</td>
          <td class="action">
            <button class="c-button ghost small" onclick={() => editOpen = true}><EditIcon /></button>
            <button class="c-button ghost small danger" onclick={() => deleteOpen = true}><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><a href="#">ブログ</a></td>
          <td><code>blog</code></td>
          <td class="num">24</td>
          <td class="action">
            <button class="c-button ghost small" onclick={() => editOpen = true}><EditIcon /></button>
            <button class="c-button ghost small danger" onclick={() => deleteOpen = true}><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><a href="#">ヘルプ</a></td>
          <td><code>help</code></td>
          <td class="num">8</td>
          <td class="action">
            <button class="c-button ghost small" onclick={() => editOpen = true}><EditIcon /></button>
            <button class="c-button ghost small danger" onclick={() => deleteOpen = true}><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><a href="#">リリースノート</a></td>
          <td><code>release</code></td>
          <td class="num">6</td>
          <td class="action">
            <button class="c-button ghost small" onclick={() => editOpen = true}><EditIcon /></button>
            <button class="c-button ghost small danger" onclick={() => deleteOpen = true}><Trash2 /></button>
          </td>
        </tr>
        <tr>
          <td><a href="#">チュートリアル</a></td>
          <td><code>tutorial</code></td>
          <td class="num">15</td>
          <td class="action">
            <button class="c-button ghost small" onclick={() => editOpen = true}><EditIcon /></button>
            <button class="c-button ghost small danger" onclick={() => deleteOpen = true}><Trash2 /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- カテゴリ編集ダイアログ -->
  <Modal bind:open={editOpen} label="カテゴリの編集">
    {#snippet header()}<h3>カテゴリの編集</h3>{/snippet}
    <Fields>
      <label>
        <span>名前</span>
        <input type="text" placeholder="カテゴリ名">
      </label>
      <label>
        <span>スラッグ</span>
        <input type="text" placeholder="category-slug">
      </label>
    </Fields>
    {#snippet footer()}
      <Button onclick={() => editOpen = false}>キャンセル</Button>
      <Button variant="primary" onclick={() => editOpen = false}>保存</Button>
    {/snippet}
  </Modal>

  <!-- 削除確認ダイアログ -->
  <Modal bind:open={deleteOpen} label="カテゴリの削除">
    {#snippet header()}<h3>カテゴリの削除</h3>{/snippet}
    <p>このカテゴリを削除してもよろしいですか？カテゴリに属する記事は「未分類」に移動されます。</p>
    {#snippet footer()}
      <Button onclick={() => deleteOpen = false}>キャンセル</Button>
      <Button variant="danger" onclick={() => deleteOpen = false}>削除する</Button>
    {/snippet}
  </Modal>
</Main>
