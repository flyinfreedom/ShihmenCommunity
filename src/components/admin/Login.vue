<template>
  <div>
    <button class="google-login" @click="loginToGoogle">使用google註冊(Popup)</button>
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
    const user = loginResult.user || { email: '' };
    if (user.email === Admin.adminAccount) {
      router.push('admin');
    } else {
      console.log('is not admin account, logouted');
      Auth.signOut();
    }
  }
}
</script>
