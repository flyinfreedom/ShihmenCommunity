<template>
  <div class="home">
    <section class="home__main">
      <Slider />
      <div class="main__description">
        <h2>
          <p>石門社區山水之鄉、</p>
          <p class="indent">等你來<br>賞螢賞桐戲水抓蝦</p>
        </h2>
        <ul class="indent">
          <li>石門山</li>
          <li>石門水庫</li>
          <li>石門大圳</li>
          <li>生態公園</li>
          <li>大平紅橋</li>
        </ul>
      </div>
    </section>
    home
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue';

@Component({
  components: { Slider }
})
export default class Home extends Vue {

}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/home.scss';
</style>
