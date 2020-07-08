<template>
  <div class="news">
    <TitleBanner title="活動消息" sub-title="News" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBanner from '@/components/TitleBanner.vue';

@Component({
  components: { TitleBanner }
})
export default class Industry extends Vue {

}
</script>
