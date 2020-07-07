<template>
  <div class="travel">
    <TitleBanner title="社區輕旅行" sub-title="Travel" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBanner from '@/components/TitleBanner.vue';

@Component({
  components: { TitleBanner }
})
export default class Travel extends Vue {

}
</script>
