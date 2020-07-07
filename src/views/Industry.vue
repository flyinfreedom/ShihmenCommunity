<template>
  <div class="industry">
    <TitleBanner title="社區產業" sub-title="Industry" />
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
