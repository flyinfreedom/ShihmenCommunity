<template>
  <article class="home__env-protection">
    <div class="mask">
      <div class="inner">
        <h2>社區環保</h2>
        <p class="description">
          本著愛護地球環境及社區好山好水的初衷，由理事長率全體志工投入綠美化、淨山及淨溪等活動，
          將最整潔的街容、山光水色分享居民及遊客，另在社區內發起舊電池回收以減輕環境汙染、
          資源回收及跳蚤市場之資源再利用以降低地球環境負擔。
        </p>
      </div>
    </div>
    <div class="env-protection__container">
      <div class="inner">
        <section class="protection">
          <div class="protection__photo" @click="onClickPhoto">
            <div class="photo" :style="{'background-image':'url(' + require('@/assets/env-protection/env-protection-0.jpg') + ')'}" />
            <h3>綠美化</h3>
          </div>
          <div class="protection__content">
            <p>本協會基於美化社區街容之初衷，定期執行社區街道綠美化工作...</p>
            <router-link class="button" :to="{ name: 'EnvProtection'}">查看更多 ></router-link>
          </div>
        </section>
        <section class="protection">
          <div class="protection__photo" @click="onClickPhoto">
            <div class="photo" :style="{'background-image':'url(' + require('@/assets/env-protection/env-protection-1.jpg') + ')'}" />
            <h3>淨溪</h3>
          </div>
          <div class="protection__content">
            <p>打鐵坑溪為本社區著名的步道，沿途景點有口琴橋、大平紅橋、...</p>
            <router-link class="button" :to="{ name: 'EnvProtection'}">查看更多 ></router-link>
          </div>
        </section>
        <section class="protection">
          <div class="protection__photo" @click="onClickPhoto">
            <div class="photo" :style="{'background-image':'url(' + require('@/assets/env-protection/env-protection-2.jpg') + ')'}" />
            <h3>淨山</h3>
          </div>
          <div class="protection__content">
            <p>石門山為本社區聞名遐邇著名景點，遊客眾多，為維持環境...</p>
            <router-link class="button" :to="{ name: 'EnvProtection'}">查看更多 ></router-link>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeEnvProtection extends Vue {
  onClickPhoto() {
    this.$router.push({ name: 'EnvProtection' });
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/home-env-protection.scss';
</style>