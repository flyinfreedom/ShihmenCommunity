<template>
  <section class="home__history">
    <div class="title__container">
      <div class="inner">
        <h2>社區文史</h2>
      </div>
    </div>
    <div class="description">
      <div class="inner">
        <p>
          1953年桃園乾旱， 大漢溪水位不足，桃園大圳出現用水不足現象，中央規劃解決問題措施，
          促使石門水庫及石門大圳於1955年7月起陸續開始興建，1964年6月同時竣工，
          為一兼具灌溉、發電、給水、防洪及觀光之多用途水庫及大圳。
        </p>
        <p>
          此為石門社區帶來大量人潮，也改善了社區對外的交通，
          從此石門社區從原先的窮鄉僻壤蛻變成馳名海內外的風景區，至今遊客絡繹絕。
        </p>
        <p>
          社區內主祀三官大帝，陪祀三山國王的永福宮是三坑里民的信仰中心，
          一樣主祀三官大帝，陪祀三山國王的永和宮則是大平里民的信仰中心；
          社區內伯公廟建廟密度極高為本區文化特色，每隔100~500公尺就可見到伯公廟，全區伯公廟共計20餘座，為先民心靈寄託所在。
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class HomeHistory extends Vue {

}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/home-history.scss';
</style>