<template>
  <div id="app">
    <NavMenu />
    <router-view/>
    <FooterBanner />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavMenu from '@/components/NavMenu.vue';
import FooterBanner from '@/components/FooterBanner.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: { NavMenu, FooterBanner, Footer }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
@import '@/scss/base.scss'

</style>
