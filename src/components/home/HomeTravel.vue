<template>
  <section class="home__travel">
    <h2>
      <div class="inner">
        社區輕旅行
      </div>
    </h2>
    <div class="travel__map">
      <div class="inner">
        <div class="map__container">
          <div class="route__container">
            <h3 class="travel-route">
              <p class="index">1</p>
              <p>石門大溪自行車逍遙行</p>
            </h3>
            <h3 class="travel-route">
              <p class="index">2</p>
              <p>石門社區親水漫遊健走</p>
            </h3>
            <h3 class="travel-route">
              <p class="index">3</p>
              <p>石門社區宮廟及伯公遊覽健走</p>
            </h3>
          </div>
          <img class="map" src="@/assets/introduction/map_web.jpg" alt="travel_map">
        </div>
        <router-link class="button" :to="{ name: 'Travel'}">查看更多</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class HomeTravel extends Vue {

}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/home-travel.scss';
</style>