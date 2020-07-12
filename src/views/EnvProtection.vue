<template>
  <BaseLayout
    class="env-protection__wrapper"
    title="社區環保"
    sub-title="Environmental protection"
    topBackgroundImage="env-protection/main-banner.jpg"
    >
    <div class="env-protection__container">
      <section class="env-protection" v-for="(protection, index) in envProtectionData" :key="index">
        <div class="inner">
          <div class="env-protection__content">
            <h3>
              0{{ index + 1 }}<span>{{ protection.title }}</span>
            </h3>
            <p class="description">{{ protection.description }}</p>
          </div>
          <div class="env-protection__photo">
            <div
              class="photo"
              :style="{'background-image':'url(' + require( `@/assets/${ protection.imageUrl }`) + ')'}"
              />
          </div>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

interface EnvProtectionData {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  components: { BaseLayout }
})
export default class EnvProtection extends Vue {
  envProtectionData: EnvProtectionData[] = [
    {
      title: '綠美化',
      description: `本協會基於美化社區街容之初衷，定期執行社區街道綠美化工作，除廣植花草樹木外，
      更是經常偕同志工執行雜草割除及街道垃圾撿等，提升社區環境質感及居民居住品質。`,
      imageUrl: 'env-protection/env-protection-0.jpg',
    },
    {
      title: '淨溪',
      description: `打鐵坑溪為本社區著名的步道，沿途景點有口琴橋、大平紅橋、親水公園及生態公園，
      全長約2公里，遊客如織，本協會定期辦理淨溪動，使遊客在潔淨的步道上，潺潺流水聲作伴下，
      盡情享受芬多精饗宴。`,
      imageUrl: 'env-protection/env-protection-1.jpg',
    },
    {
      title: '淨山',
      description: `石門山為本社區聞名遐邇著名景點，遊客眾多，為維持環境整潔，
      本協會定期發動志工執行淨山活動，並張貼告示牌呼籲遊客垃圾要帶下山，以維持山徑潔淨及爬山好心情。`,
      imageUrl: 'env-protection/env-protection-2.jpg',
    },
  ];
}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/env-protection.scss';
</style>