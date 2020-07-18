<template>
  <div class="login">
    <button class="google-login" @click="loginToGoogle">
        <img :src="require('@/assets/google-logo.png')" class="logo" alt="shihmen-community-logo">
      使用Google 帳號登入
      </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Firebase, { auth } from "firebase/app";
import { Auth, Admin } from "@/firebase/auth";

@Component
export default class Login extends Vue {
  async loginToGoogle() {
    const router = this.$router;
    const provider = new Firebase.auth.GoogleAuthProvider();
    const loginResult = await Auth.signInWithPopup(provider);
    const user = loginResult.user || { email: "" };
    if (user.email === Admin.adminAccount) {
      router.push("admin");
    } else {
      console.log("is not admin account, logouted");
      Auth.signOut();
    }
  }
}
</script>

<style scoped>
.login {
  margin: 0 auto;
  max-width: 222px;
}

.google-login {
  line-height: 2em;
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

.logo {
  height: 1.5em;
  margin-bottom: -0.3em;
  margin-right: 0.5em;
}
</style>
