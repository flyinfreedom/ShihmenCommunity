<template>
  <BaseLayout
    class="welfare__wrapper"
    title="社區福利"
    sub-title="Welfare"
    topBackgroundImage="welfare/main-banner.jpg"
    >
    <div class="welfare__container">
      <section class="welfare" v-for="(welfare, index) in welfareData" :key="index">
        <div class="inner">
          <div class="welfare__content">
            <h3>0{{ index + 1 }}</h3>
            <p class="description">{{ welfare.description }}</p>
          </div>
          <div class="welfare__photos">
            <div class="photo__container" v-for="imageUrl in welfare.imagesUrl" :key="imageUrl">
              <div
                class="photo"
                :style="{'background-image':'url(' + require( `@/assets/${imageUrl}`) + ')'}"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

interface WelfareData {
  description: string;
  imagesUrl: string[];
}

@Component({
  components: { BaseLayout }
})
export default class Welfare extends Vue {
  welfareData: WelfareData[] = [
    {
      description: `石門社區內無工廠無汙染，風光明媚、山水秀麗，老年人口偏多，因此協會設立關懷據點，
      提供老人活動場所，開設延緩失能課程，教授健康知識，如健康飲食、體適能、舞蹈及桌遊等，
      並提供午餐。對於不良於行的長者本據點則提供送餐到府、關懷訪視及電話噓寒問暖的服務。`,
      imagesUrl: [
        'welfare/welfare-0-0.jpg',
        'welfare/welfare-0-1.jpg',
        'welfare/welfare-0-2.jpg',
      ],
    },
    {
      description: `辦理烘焙班隊，學習烘焙技藝，開放給會員、志工及居民參加，
      未來可讓參加者自行開業販賣自製烘焙產品，提升社區民眾就業機會。`,
      imagesUrl: [
        'welfare/welfare-1-0.jpg',
        'welfare/welfare-1-1.jpg',
        'welfare/welfare-1-2.jpg',
      ],
    },
    {
      description: `辦理社區旅遊，提供社區居民走出社區，認識台灣各地鄉土風俗、人情及美景的機會，
      促使參與者達到放鬆心情、調冶性情的效用。`,
      imagesUrl: [
        'welfare/welfare-2-0.jpg',
        'welfare/welfare-2-1.jpg',
        'welfare/welfare-2-2.jpg',
      ],
    }
  ];
}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/welfare.scss';
</style>