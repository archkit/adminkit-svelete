<script lang="ts">
  import { Main, Section, PageHeader, DataTable, Badge, Button, ActionBar, Pagination, ThemeSwitcher, Dot } from '$lib';
  import BellIcon from 'lucide-svelte/icons/bell';
  import CircleHelpIcon from 'lucide-svelte/icons/circle-help';
  import MoreHorizontalIcon from 'lucide-svelte/icons/more-horizontal';
  import EyeIcon from 'lucide-svelte/icons/eye';
  import EditIcon from 'lucide-svelte/icons/edit';
  import Trash2Icon from 'lucide-svelte/icons/trash-2';

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    date: string;
    status: string;
    statusVariant: 'success' | 'warning';
    posts: number;
  }

  const allUsers: User[] = [
    { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: '管理者', date: '2025-01-15', status: '有効', statusVariant: 'success', posts: 42 },
    { id: 2, name: '佐藤花子', email: 'sato@example.com', role: '編集者', date: '2025-03-22', status: '有効', statusVariant: 'success', posts: 18 },
    { id: 3, name: '鈴木一郎', email: 'suzuki@example.com', role: '閲覧者', date: '2025-06-10', status: '無効', statusVariant: 'warning', posts: 0 },
    { id: 4, name: '山田次郎', email: 'yamada@example.com', role: '編集者', date: '2025-08-05', status: '有効', statusVariant: 'success', posts: 7 },
    { id: 5, name: '高橋美咲', email: 'takahashi@example.com', role: '閲覧者', date: '2025-09-14', status: '有効', statusVariant: 'success', posts: 3 },
    { id: 6, name: '中村七海', email: 'nakamura@example.com', role: '編集者', date: '2025-10-01', status: '有効', statusVariant: 'success', posts: 11 },
    { id: 7, name: '渡辺健', email: 'watanabe@example.com', role: '閲覧者', date: '2025-11-20', status: '無効', statusVariant: 'warning', posts: 0 },
    { id: 8, name: '伊藤めぐみ', email: 'ito@example.com', role: '管理者', date: '2025-12-05', status: '有効', statusVariant: 'success', posts: 25 },
  ];

  const columns = [
    { key: 'name', label: '名前', sortable: true },
    { key: 'email', label: 'メール', sortable: true },
    { key: 'role', label: 'ロール' },
    { key: 'date', label: '登録日', sortable: true },
    { key: 'status', label: 'ステータス' },
    { key: 'posts', label: '投稿数', align: 'num' as const, sortable: true },
  ];

  let selected = $state(new Set<number>());
  let sort = $state<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  let currentPage = $state(1);
  const perPage = 5;

  const sortedUsers = $derived.by(() => {
    let result = [...allUsers];
    if (sort) {
      const key = sort.key as keyof User;
      result.sort((a, b) => {
        const av = a[key];
        const bv = b[key];
        if (av < bv) return sort!.direction === 'ascending' ? -1 : 1;
        if (av > bv) return sort!.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return result;
  });

  const pagedUsers = $derived(
    sortedUsers.slice((currentPage - 1) * perPage, currentPage * perPage)
  );

  const totalPages = $derived(Math.ceil(allUsers.length / perPage));
</script>

<Main crumbs={[{ label: 'Svelte コンポーネント', href: '#' }, { label: 'DataTable' }]}>
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><BellIcon /><Dot count={3} /></a>
    <a href="#" class="c-button ghost small"><CircleHelpIcon /></a>
  {/snippet}
  {#snippet bar()}
    <ActionBar count={selected.size} sticky>
      <Button size="small">エクスポート</Button>
      <Button size="small" variant="danger">削除</Button>
    </ActionBar>
  {/snippet}

  <PageHeader title="DataTable" />

  <!-- 基本 -->
  <Section heading="基本（チェックボックスなし）">
    <DataTable data={allUsers.slice(0, 5)} {columns}>
      {#snippet row(item)}
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>{item.date}</td>
        <td><Badge variant={item.statusVariant}>{item.status}</Badge></td>
        <td class="num">{item.posts}</td>
      {/snippet}
    </DataTable>
  </Section>

  <!-- Selectable + Actions + Sort + Pagination + ActionBar -->
  <Section heading="Selectable + Actions + ソート + ページネーション">
    <DataTable data={pagedUsers} {columns} selectable bind:selected bind:sort>
      {#snippet row(item)}
        <td><a href="#">{item.name}</a></td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>{item.date}</td>
        <td><Badge variant={item.statusVariant}>{item.status}</Badge></td>
        <td class="num">{item.posts}</td>
      {/snippet}
      {#snippet actions(item)}
        <div class="c-dropdown">
          <button class="c-button ghost small" popovertarget="menu-{item.id}" aria-haspopup="menu"><MoreHorizontalIcon /></button>
          <ul popover id="menu-{item.id}" role="menu">
            <li role="presentation"><button role="menuitem"><EyeIcon />詳細</button></li>
            <li role="presentation"><button role="menuitem"><EditIcon />編集</button></li>
            <li role="separator"><hr></li>
            <li role="presentation"><button role="menuitem" class="danger"><Trash2Icon />削除</button></li>
          </ul>
        </div>
      {/snippet}
    </DataTable>

    <Pagination total={totalPages} bind:current={currentPage} />
  </Section>

  <!-- Compact -->
  <Section heading="Compact">
    <DataTable data={allUsers.slice(0, 3)} columns={columns.slice(0, 3)} compact>
      {#snippet row(item)}
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
      {/snippet}
    </DataTable>
  </Section>
</Main>
