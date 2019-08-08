<template>
  <div class="container">
    <login-form />
    <p @click="test">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "nuxt-property-decorator";
import PageStore from "~/store/pages/index";

@Component({
  components: {
    LoginForm: () => import("~/components/pages/index/LoginForm.vue")
  },
  async asyncData() {
    await PageStore.fetchUser();
  }
})
export default class IndexPage extends Vue {
  get name(): string {
    return PageStore.name;
  }

  @Emit()
  private test() {
    console.log(`test -> ${PageStore.user}`);
  }
}
</script>
