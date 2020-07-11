<template>
  <div class="slider__wrapper">
    <keep-alive>
      <transition name="slider" mode="in-out">
        <template v-for="(image, index) in images">
          <div
            class="slider__image"
            :key="index"
            v-if="showIndex === index"
            :style="{'background-image':'url(' + require( `@/assets/home/${image.url}`) + ')'}"
            />
        </template>
      </transition>
    </keep-alive>
    <div class="slider__button">
      <div
        class="button"
        v-for="(image, index) in images"
        :key="index"
        :class="showIndex === index ? 'selected': ''"
        @click="onClickButton(index)"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import PageVisibilityMixin from '@/utils/page-visibility-mixin';

@Component
export default class HomeSlider extends Mixins(PageVisibilityMixin) {
  @Prop({ type: Number, default: 6000 }) timer!: number;
  @Prop({ type: Boolean, default: true }) auto!: boolean;

  showIndex = 0;
  interval: number | null = null;
  images: any[] = [
    {
      url: 'slider-0.jpg',
    },
    {
      url: 'slider-1.jpg',
    },
    {
      url: 'slider-2.jpg',
    },
    {
      url: 'slider-3.jpg',
    },
  ];

  created() {
    // this.getSliderHeight();
    // window.addEventListener('resize', this.getSliderHeight);
    this.visibilityChangeListenener();
  }

  mounted() {
    if (this.auto) this.autoPlay();
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.showIndex >= this.images.length - 1 ? this.showIndex = 0 : this.showIndex += 1;
    }, this.timer);
  }

  stopPlay() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onClickButton(index: number) {
    this.showIndex = index;
    this.stopPlay();
    setTimeout(this.autoPlay, 0);
  }

  // getSliderHeight(): void {
  //   if (window.innerWidth < BreakPoint.Tablet) {
  //     this.sliderHeight = '57.5vw';
  //     return;
  //   }
  //   this.sliderHeight = (window.innerHeight - NavHeight.Web) + 'px';
  // }

  handleVisibilityChange(): void {
    const documentHiddenCheck: boolean = this.documentHiddenCheck();
    if (documentHiddenCheck && document.hidden) {
      this.stopPlay();
    } else {
      this.autoPlay();
    }
  }

  visibilityChangeListenener(): void {
    const documentAddEventListenerCheck: boolean = this.documentAddEventListenerCheck();
    if (documentAddEventListenerCheck) {
      document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
    }
  }

  destroyed() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    // window.removeEventListener('resize', this.getSliderHeight);
    if (this.interval) clearInterval(this.interval);
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/slider.scss';
</style>