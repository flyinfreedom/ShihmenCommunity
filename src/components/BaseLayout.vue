<template>
  <article>
    <div
      class="title-banner__wrapper"
      :style="{'background-image':'url(' + require( `@/assets/${topBackgroundImage}`) + ')'}"
      >
      <div class="banner-mask">
        <h2>
          <p class="title">{{ title }}</p>
          <p class="sub-title">{{ subTitle }}</p>
        </h2>
      </div>
    </div>
    <slot />
    <div :class="['footer-banner__wrapper', footerBannerClass]">
      <p class="title">
        桃園龍潭區石門社區發展協會
        <img src="https://fakeimg.pl/300x300/" class="logo" alt="shihmen-community-logo">
      </p>
      <span class="address">龍潭區大平里永平路80號</span>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BaseLayout extends Vue {
  @Prop({ type: String, default: '' }) title!: string;
  @Prop({ type: String, default: '' }) subTitle!: string;
  @Prop({ type: String, default: 'home/slider-fake0.jpg' }) topBackgroundImage!: string;
  @Prop({ type: String, default: '' }) footerBannerClass!: string;
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/title-banner.scss';
@import '@/scss/modules/footer-banner.scss';
</style>