<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Firebase, { auth } from "firebase/app";
import { Auth, Admin } from "@/firebase/auth";

@Component
export default class AdminLayout extends Vue {

}
</script>
