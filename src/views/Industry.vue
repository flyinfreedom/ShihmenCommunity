<template>
  <BaseLayout
    class="industry__wrapper"
    title="社區產業"
    sub-title="Industry"
    topBackgroundImage="industry/main-banner.jpg"
    >
    <div class="industry__container">
      <section class="industry">
        <div class="inner">
          <div class="industry__content">
            <h3>
              01<span>稻米、筊白筍</span>
            </h3>
            <p class="introduction">
              本社區屬傳統農業園區，稻米、筊白筍為主要的農作物，
              以石門水庫水源作為灌溉用水，因全社區無工廠，水資源純淨無汙染，
              產出的農作物值得消費者安心食用。
            </p>
          </div>
          <div class="industry__photo">
            <div class="photo">
              <img src="https://picsum.photos/600/800" alt="industry">
            </div>
          </div>
        </div>
      </section>
      <section class="industry">
        <div class="inner">
          <div class="industry__content">
            <h3>
              02<span>石門活魚</span>
            </h3>
            <p class="introduction">
              本社區鄰近石門水庫，屬水源管制區，轄內水質絕佳，石門活魚為本社區的招牌產業，
              屬淡水活魚，聞名海內外，每到假日車水馬龍遊客絡繹不絕，尤其每年十~十一月為石門活魚節，
              更是吸引各地遊客前來旅遊嘗鮮。
            </p>
          </div>
          <div class="industry__photo">
            <div class="photo">
              <img src="https://picsum.photos/600/800" alt="industry">
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

@Component({
  components: { BaseLayout }
})
export default class Industry extends Vue {

}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/industry.scss';
</style>