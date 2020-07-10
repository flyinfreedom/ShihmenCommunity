<template>
  <BaseLayout class="welfare__wrapper" title="社區福利" sub-title="Welfare">
    <section class="welfare">
      <div class="inner">
        <div class="welfare__content">
          <h3>01</h3>
          <p class="description">
            石門社區內無工廠無汙染，風光明媚、山水秀麗，老年人口偏多，
            因此協會設立關懷據點，提供老人活動場所，開設延緩失能課程，教授健康知識，
            如健康飲食、體適能、舞蹈及桌遊等，並提供午餐。對於不良於行的長者本據點則提供送餐到府、關懷訪視及電話噓寒問暖的服務。
          </p>
        </div>
        <div class="welfare__photos">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
        </div>
      </div>
    </section>
    <section class="welfare">
      <div class="inner">
        <div class="welfare__content">
          <h3>02</h3>
          <p class="description">
            辦理烘焙班隊，學習烘焙技藝，開放給會員、志工及居民參加，未來可讓參加者自行開業販賣自製烘焙產品，提升社區民眾就業機會。
          </p>
        </div>
        <div class="welfare__photos">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
        </div>
      </div>
    </section>
    <section class="welfare">
      <div class="inner">
        <div class="welfare__content">
          <h3>03</h3>
          <p class="description">
            辦理社區旅遊，提供社區居民走出社區，認識台灣各地鄉土風俗、人情及美景的機會，促使參與者達到放鬆心情、調冶性情的效用。
          </p>
        </div>
        <div class="welfare__photos">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
          <img class="photo" src="https://fakeimg.pl/403x320/?text=Welfare Photo" alt="shihmen-comminity-welfare-photo">
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

@Component({
  components: { BaseLayout }
})
export default class Welfare extends Vue {

}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/welfare.scss';
</style>