<template>
  <form @submit.prevent="">
    <input v-model="form.address" type="text" placeholder="メールアドレス" />
    <input v-model="form.password" type="text" placeholder="パスワード" />
    <button @click="submit">
      ログイン
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "nuxt-property-decorator";
import PageStore, { Form } from "@/store/pages/index";

@Component
export default class LoginButton extends Vue {
  form: Form = { address: "", password: "" };

  // methods
  @Emit()
  private submit() {
    PageStore.login(this.form);
  }
}
</script>
