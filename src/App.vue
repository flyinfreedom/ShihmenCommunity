<template>
  <div id="app">
    <NavMenu />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavMenu from '@/components/NavMenu.vue';

@Component({
  components: { NavMenu }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
@import '@/scss/base.scss'

</style>
