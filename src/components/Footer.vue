<template>
  <footer>
    <div :class="['footer-banner__wrapper', footerBannerClass]">
      <p class="title">
        桃園龍潭區石門社區發展協會
        <img :src="require('@/assets/logo.png')" class="logo" alt="shihmen-community-logo">
      </p>
      <span class="address">龍潭區大平里永平路80號</span>
    </div>
    <div class="footer__wrapper">
      <span class="copyright">Copyright © Candy All Rights Reserved.</span>
      <ul class="link">
        <li v-for="link in links" :key="link.url">
          <a :href="link.url" target="_blank">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Travel extends Vue {
  @Prop({ type: String, default: '' }) footerBannerClass!: string;
  // TODO LINK需要改成正確的
  links: any[] = [
    {
      label: '社區通',
      url: 'http://sixstar.moc.gov.tw/blog/johnlee4712609',
    },
    {
      label: 'FaceBook',
      url: 'https://www.facebook.com',
    }
  ];
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/footer.scss';
@import '@/scss/modules/footer-banner.scss';
</style>