<script>
  import { Main, Section, Grid, Stats, Badge, Dot, List, PageHeader, ThemeSwitcher } from '$lib';
  import Bell from 'lucide-svelte/icons/bell';
  import CircleHelp from 'lucide-svelte/icons/circle-help';
</script>

<Main width="full">
  {#snippet actions()}
    <ThemeSwitcher />
    <a href="#" class="c-button ghost small"><Bell /><Dot count={3} /></a>
    <a href="#" class="c-button ghost small"><CircleHelp /></a>
  {/snippet}

  <PageHeader title="ダッシュボード" />

  <!-- KPI カード -->
  <Section heading="KPI" hideHeading>
    <Grid cols={4}>
      <Stats label="ユーザー数" value="1,284">{#snippet sub()}前月比 <Badge variant="success">+12.5%</Badge>{/snippet}</Stats>
      <Stats label="注文数" value="568">{#snippet sub()}前月比 <Badge variant="success">+8.2%</Badge>{/snippet}</Stats>
      <Stats label="売上" value="¥3,420,000">{#snippet sub()}前月比 <Badge variant="warning">-2.1%</Badge>{/snippet}</Stats>
      <Stats label="コンバージョン率" value="3.6%">{#snippet sub()}前月比 <Badge variant="success">+0.4%</Badge>{/snippet}</Stats>
    </Grid>
  </Section>

  <!-- 最近のアクティビティ -->
  <Section heading="最近のアクティビティ">
    <List variants={['bordered']}>
      <li>田中太郎が新しい記事を投稿しました <small>5分前</small></li>
      <li>佐藤花子がプロフィールを更新しました <small>15分前</small></li>
      <li>鈴木一郎が新規登録しました <small>1時間前</small></li>
      <li>山田次郎が注文 #1042 を完了しました <small>2時間前</small></li>
      <li>高橋美咲がコメントを追加しました <small>3時間前</small></li>
    </List>
  </Section>

  <!-- 最近の注文 -->
  <Section heading="最近の注文">
    <div class="c-table-scroll">
      <table class="c-table">
        <thead>
          <tr>
            <th>注文ID</th>
            <th>顧客名</th>
            <th>商品</th>
            <th class="num">金額</th>
            <th>ステータス</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1045</td>
            <td>田中太郎</td>
            <td>プレミアムプラン</td>
            <td class="num">¥12,000</td>
            <td><Badge variant="success">完了</Badge></td>
            <td>2026-04-08</td>
          </tr>
          <tr>
            <td>#1044</td>
            <td>佐藤花子</td>
            <td>スタンダードプラン</td>
            <td class="num">¥8,000</td>
            <td><Badge variant="success">完了</Badge></td>
            <td>2026-04-07</td>
          </tr>
          <tr>
            <td>#1043</td>
            <td>鈴木一郎</td>
            <td>ベーシックプラン</td>
            <td class="num">¥3,000</td>
            <td><Badge variant="warning">処理中</Badge></td>
            <td>2026-04-07</td>
          </tr>
          <tr>
            <td>#1042</td>
            <td>山田次郎</td>
            <td>プレミアムプラン</td>
            <td class="num">¥12,000</td>
            <td><Badge variant="success">完了</Badge></td>
            <td>2026-04-06</td>
          </tr>
          <tr>
            <td>#1041</td>
            <td>高橋美咲</td>
            <td>スタンダードプラン</td>
            <td class="num">¥8,000</td>
            <td><Badge>キャンセル</Badge></td>
            <td>2026-04-06</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Section>
</Main>
