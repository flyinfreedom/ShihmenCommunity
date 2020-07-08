<template>
  <footer class="footer__wrapper">
    <span class="copyright">Copyright © Candy  All Rights Reserved.</span>
    <ul class="link">
      <li v-for="link in links" :key="link.url">
        <a :href="link.url" target="_blank">{{ link.label }}</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Travel extends Vue {
  // TODO LINK需要改成正確的
  links: any[] = [
    {
      label: '社區通',
      url: 'https://www.google.com',
    },
    {
      label: 'FaceBook',
      url: 'https://www.facebook.com',
    }
  ];
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/footer.scss';
</style>