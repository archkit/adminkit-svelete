<script lang="ts">
  import { ShellStandalone, Fields, Button, Divider } from '$lib';
</script>

<ShellStandalone width="narrow">
  <form>
    <h1>adminkit</h1>
    <Fields>
      <label>
        <span>メールアドレス</span>
        <input type="email" required placeholder="you@example.com">
      </label>
      <label>
        <span>パスワード</span>
        <input type="password" required placeholder="パスワード">
      </label>
    </Fields>
    <Button variant="primary" class="full">ログイン</Button>
    <Divider label="または" />
    <Button class="full">Googleでログイン</Button>
    <p><a href="#">パスワードを忘れた方</a></p>
  </form>
</ShellStandalone>
