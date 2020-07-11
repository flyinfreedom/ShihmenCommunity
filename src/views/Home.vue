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
    <section class="env-protection">
      <div class="inner">
        <h2>社區環保</h2>
        <p class="description">
          本著愛護地球環境及社區好山好水的初衷，由理事長率全體志工投入綠美化、淨山及淨溪等活動，
          將最整潔的街容、山光水色分享居民及遊客，另在社區內發起舊電池回收以減輕環境汙染、
          資源回收及跳蚤市場之資源再利用以降低地球環境負擔。
        </p>
      </div>
    </section>
    <section class="travel">
      <div class="inner">
        <h2>社區輕旅行</h2>
        <div class="travel__map"></div>
      </div>
    </section>
    <section class="history">
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
