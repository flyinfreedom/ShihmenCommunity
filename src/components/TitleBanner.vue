<template>
  <div
    class="title-banner__wrapper"
    :style="{'background-image':'url(' + require( `@/assets/${backgroundImage}`) + ')'}"
    >
    <div class="banner-mask">
      <h2>
        <p class="title">{{ title }}</p>
        <p class="sub-title">{{ subTitle }}</p>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TitleBanner extends Vue {
  @Prop({ type: String, default: '' }) title!: string;
  @Prop({ type: String, default: '' }) subTitle!: string;
  @Prop({ type: String, default: 'home/slider-fake0.jpg' }) backgroundImage!: string;
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/title-banner.scss';
</style>