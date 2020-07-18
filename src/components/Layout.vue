<template>
  <div>    
    <NavMenu />
      <router-view/>
    <Footer :footer-banner-class="renderClass" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavMenu from '@/components/NavMenu.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: { NavMenu, Footer }
})
export default class Layout extends Vue {
  get renderClass() {
    const routerNameArray = ['Introduction', 'Home'];
    return routerNameArray.some(v => v === this.$route.name) ? 'theme-white' : '';
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/title-banner.scss';
</style>