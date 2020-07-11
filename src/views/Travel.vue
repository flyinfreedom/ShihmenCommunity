<template>
  <BaseLayout
    title="社區輕旅行"
    sub-title="Travel"
    class="travel__wrapper"
    topBackgroundImage="travel/main-banner.jpg"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';

@Component({
  components: { BaseLayout }
})
export default class Travel extends Vue {

}
</script>
