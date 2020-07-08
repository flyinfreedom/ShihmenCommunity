<template>
  <div :class="['footer-banner__wrapper', bgColorClass]">
    <p class="title">桃園龍潭區石門社區發展協會</p>
    <span class="address">龍潭區大平里永平路80號</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Travel extends Vue {
  @Prop({ type: String, default: ''}) bgColorClass!: string;
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/footer-banner.scss';
</style>