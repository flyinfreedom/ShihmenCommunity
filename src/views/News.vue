<template>
  <div class="news">
    <BaseLayout title="活動消息" sub-title="News" />
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
