<template>
  <div class="industry">
    <BaseLayout title="社區產業" sub-title="Industry" />
  </div>
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
