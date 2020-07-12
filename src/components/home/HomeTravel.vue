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
        </div>
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