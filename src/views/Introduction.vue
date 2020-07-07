<template>
  <div class="introduction">
    <TitleBanner title="社區介紹" sub-title="Introduction" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBanner from '@/components/TitleBanner.vue';

@Component({
  components: { TitleBanner }
})
export default class Introduction extends Vue {

}
</script>
