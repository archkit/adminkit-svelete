<script lang="ts">
  import { Main, Section, Stack, Cluster, Grid, SidebarLayout, Badge, PageHeader } from '$lib';
  import NavActions from '../../../../demo/NavActions.svelte';
</script>

<Main crumbs={[{label: 'レイアウト'}]}>
  {#snippet actions()}
    <NavActions />
  {/snippet}

  <PageHeader title="レイアウト" />

  <!-- Layout Primitives -->
  <Section heading="Layout Primitives">

    <Section heading="l-stack">
      <Stack class="demo-container">
        <div class="demo-block">Stack Item 1</div>
        <div class="demo-block">Stack Item 2</div>
        <div class="demo-block">Stack Item 3</div>
      </Stack>
    </Section>

    <Section heading="l-cluster">
      <Cluster class="demo-container">
        <Badge variant="primary">Tag A</Badge>
        <Badge variant="success">Tag B</Badge>
        <Badge variant="warning">Tag C</Badge>
        <Badge variant="danger">Tag D</Badge>
        <Badge>Tag E</Badge>
      </Cluster>
    </Section>

    <Section heading="l-grid">
      <Grid cols={3}>
        <div class="demo-block-lg">1</div>
        <div class="demo-block-lg">2</div>
        <div class="demo-block-lg">3</div>
      </Grid>
    </Section>

    <Section heading="l-sidebar">
      <SidebarLayout class="demo-container">
        <div class="demo-block-muted">Main content area. This takes up the remaining space.</div>
        <div class="demo-block-lg">Sidebar</div>
      </SidebarLayout>
    </Section>

    <Section heading="l-sidebar.reverse（左サイドバー）">
      <SidebarLayout reverse class="demo-container">
        <div class="demo-block-muted">Main content area.</div>
        <div class="demo-block-lg">Sidebar（左に表示）</div>
      </SidebarLayout>
    </Section>

    <Section heading="l-switcher">
      <div class="l-switcher demo-container">
        <div class="demo-block-lg">Column A</div>
        <div class="demo-block-lg">Column B</div>
        <div class="demo-block-lg">Column C</div>
      </div>
    </Section>

  </Section>
</Main>
