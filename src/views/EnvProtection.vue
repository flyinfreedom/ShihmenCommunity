<template>
  <div class="env-protection">
    <BaseLayout title="社區環保" sub-title="Environmental protection" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

@Component({
  components: { BaseLayout }
})
export default class EnvProtection extends Vue {

}
</script>
