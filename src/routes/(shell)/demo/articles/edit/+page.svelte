<script lang="ts">
  import { Main, Section, Stack, Cluster, SidebarLayout, Tag, Upload, Check, PageHeader, Fields, Field, Button } from '$lib';
  import NavActions from '../../../../../demo/NavActions.svelte';
  import Eye from 'lucide-svelte/icons/eye';
  import ImageIcon from 'lucide-svelte/icons/image';
  import X from 'lucide-svelte/icons/x';
</script>

<Main crumbs={[{label: '記事', href: '/demo/articles'}, {label: '記事編集'}]} width="wide">
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <PageHeader title="記事編集">
    {#snippet actions()}
      <a href="#" class="c-button ghost small"><Eye />プレビュー</a>
    {/snippet}
  </PageHeader>

  <form class="contents">
    <SidebarLayout>

      <!-- メインエリア -->
      <Stack>
        <Section heading="基本情報">
          <Fields>
            <label>
              <span>タイトル</span>
              <input type="text" value="2026年の展望 — テクノロジーと社会の変化" placeholder="記事のタイトルを入力..." required>
            </label>
            <label>
              <span>スラッグ</span>
              <input type="text" value="2026-outlook" placeholder="url-friendly-slug" aria-describedby="slug-help">
              <small id="slug-help">URLに使用される識別子です</small>
            </label>
          </Fields>
        </Section>

        <Section heading="本文">
          <Fields>
            <Field label="本文" hidden>
              <textarea placeholder="本文を入力..." rows="12">テクノロジーの進化は加速を続けています。

2026年、私たちの働き方や生活はどのように変わるのでしょうか。

本記事では、AIの発展、リモートワークの定着、そしてサステナビリティへの取り組みという3つの視点から、今年の展望を探ります。</textarea>
            </Field>
          </Fields>
        </Section>

        <Section heading="SEO">
          <Fields>
            <label>
              <span>メタタイトル</span>
              <input type="text" value="2026年の展望 — テクノロジーと社会の変化 | adminkit" placeholder="検索結果に表示されるタイトル" aria-describedby="meta-title-help">
              <small id="meta-title-help">60文字以内を推奨</small>
            </label>
            <label>
              <span>メタディスクリプション</span>
              <textarea rows="3" placeholder="検索結果に表示される説明文" aria-describedby="meta-desc-help">AI、リモートワーク、サステナビリティの3つの視点から2026年の展望を探る記事です。</textarea>
              <small id="meta-desc-help">160文字以内を推奨</small>
            </label>
          </Fields>
        </Section>

        <section>
          <section class="c-card danger">
            <h3>記事の削除</h3>
            <p>この操作は取り消せません。記事に関連するコメントもすべて削除されます。</p>
            <div>
              <Button variant="danger" size="small" type="button">この記事を削除する</Button>
            </div>
          </section>
        </section>
      </Stack>

      <!-- サイドバー -->
      <Section heading="サイドバー" hideHeading>
        <section class="c-card">
          <h3>公開</h3>
          <Fields>
            <label>
              <span>ステータス</span>
              <select>
                <option selected>公開</option>
                <option>下書き</option>
                <option>アーカイブ</option>
              </select>
            </label>
            <label>
              <span>公開日時</span>
              <input type="datetime-local" value="2026-04-10T09:00">
            </label>
          </Fields>
          <Cluster justify="right">
            <a href="/demo/articles" class="c-button small">キャンセル</a>
            <Button variant="primary" size="small" type="submit">保存</Button>
          </Cluster>
        </section>

        <section class="c-card">
          <h3>カテゴリ</h3>
          <Fields>
            <ul class="check-group">
              <li><Check label="お知らせ" /></li>
              <li><Check label="ブログ" checked /></li>
              <li><Check label="ヘルプ" /></li>
              <li><Check label="リリースノート" /></li>
              <li><Check label="チュートリアル" /></li>
            </ul>
          </Fields>
        </section>

        <section class="c-card">
          <h3>タグ</h3>
          <Fields>
            <Field label="タグ" hidden>
              <input type="text" value="テクノロジー, AI, 2026" placeholder="カンマ区切りで入力...">
            </Field>
            <div class="c-tag-list">
              <Tag>テクノロジー <button aria-label="削除"><X /></button></Tag>
              <Tag>AI <button aria-label="削除"><X /></button></Tag>
              <Tag>2026 <button aria-label="削除"><X /></button></Tag>
            </div>
          </Fields>
        </section>

        <section class="c-card">
          <h3>アイキャッチ画像</h3>
          <Upload accept="image/*">
            <ImageIcon />
            <p>クリックまたはドラッグ＆ドロップ</p>
            <small>PNG, JPG（最大 5MB）</small>
          </Upload>
        </section>
      </Section>

    </SidebarLayout>
  </form>
</Main>
