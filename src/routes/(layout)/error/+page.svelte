<script lang="ts">
  import { Button, Cluster, ErrorPage } from '$lib';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
  import Home from 'lucide-svelte/icons/home';
  import RefreshCw from 'lucide-svelte/icons/refresh-cw';

  let show500 = $state(false);
</script>

{#if !show500}
  <ErrorPage code={404} title="ページが見つかりません" message="お探しのページは存在しないか、移動した可能性があります。">
    <Button onclick={() => history.back()}><ArrowLeft />前のページへ</Button>
    <a href="/" class="c-button primary"><Home />ダッシュボードへ</a>
    <Cluster justify="center" style="margin-top: 1rem">
      <Button variant="ghost" size="small" onclick={() => show500 = true}>500 エラーを表示</Button>
    </Cluster>
  </ErrorPage>
{:else}
  <ErrorPage code={500} title="サーバーエラー" message="予期しないエラーが発生しました。しばらくしてからもう一度お試しください。" danger>
    <Button onclick={() => location.reload()}><RefreshCw />再読み込み</Button>
    <a href="/" class="c-button primary"><Home />ダッシュボードへ</a>
    <Cluster justify="center" style="margin-top: 1rem">
      <Button variant="ghost" size="small" onclick={() => show500 = false}>404 エラーを表示</Button>
    </Cluster>
  </ErrorPage>
{/if}
