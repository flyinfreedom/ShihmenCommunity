<template>
  <BaseLayout
    title="社區輕旅行"
    sub-title="Travel"
    class="travel__wrapper"
    topBackgroundImage="travel/main-banner.jpg"
    >
    <div class="inner">
      <div class="travel-map__container">
        <img class="map" src="@/assets/introduction/map_web.jpg" alt="travel_map">
      </div>
    </div>
    <div class="travel__container">
      <section class="travel" v-for="(travel, index) in travelData" :key="index">
        <div class="inner">
          <div class="index">
            0{{ index + 1 }}
          </div>
          <div class="travel__content">
            <h3>{{ travel.title }}</h3>
            <p class="description">
              {{ travel.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

interface TravelData {
  title: string;
  description: string;
}

@Component({
  components: { BaseLayout }
})
export default class Travel extends Vue {
  travelData: TravelData[] = [
    {
      title: '石門大溪自行車逍遙行，全程25KM',
      description: '大平市民活動中心~三坑老街~石門大圳鐵馬道~大溪韭菜專區~大溪橋~大溪老街~木藝博物館~石門水庫南苑公園~壩底~中線公園~壩頂(石門勝景)~楓林步道~油桐花道~大平市民活動中心',
    },
    {
      title: '石門社區親水漫遊健走，全程8KM',
      description: '大平市民活動中心~大平紅橋~口琴橋~櫻花隧道~三坑鐵馬道~三坑老街~泰源神桌~生態公園~蔗部溪步道~大平市民活動中心',
    },
    {
      title: '石門社區宮廟及伯公遊覽健走，全程9KM',
      description: '大平市民活動中心~開基伯公~永和宮~水頭伯公~清福祠伯公~水源伯公~山神伯公~美國路伯公~樟樹伯公~集福祠伯公~永福宮~樟樹下伯公~水尾伯公~蔗部溪伯公~橋頭伯公~大平市民活動中心',
    },
  ];
}
</script>
<style lang="scss" scoped>
  @import '@/scss/pages/travel.scss';
</style>