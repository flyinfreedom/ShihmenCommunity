<template>
  <div class="signin">
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/admin/Login.vue';

@Component({
  components: { Login }
})
export default class Signin extends Vue {
  
}
</script>
