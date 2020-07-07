<template>
  <div class="env-protection">
    <TitleBanner title="社區環保" sub-title="Environmental protection" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBanner from '@/components/TitleBanner.vue';

@Component({
  components: { TitleBanner }
})
export default class EnvProtection extends Vue {

}
</script>
