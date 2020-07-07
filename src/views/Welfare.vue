<template>
  <div class="welfare">
    <TitleBanner title="社區福利" sub-title="Welfare" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBanner from '@/components/TitleBanner.vue';

@Component({
  components: { TitleBanner }
})
export default class Welfare extends Vue {

}
</script>
