<template>
  <header class="nav-menu__wrapper">
    <h1>
      <router-link class="title" :to="{ name: 'Home' }">
        <img src="https://fakeimg.pl/300/" class="logo" alt="shihmen-community-logo">
        <span>桃園龍潭區石門社區發展協會</span>
      </router-link>
    </h1>
    <nav class="nav">
      <ul class="nav-menu">
        <li class="menu__item" v-for="item in menu" :key="item.route">
          <router-link :to="{ name: item.route }">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <a class="mail-connection" href="mailto:shihmencommunity@gmail.com">
      <img src="https://fakeimg.pl/300/" class="mail-icon" alt="mail-icon">
      <span>信箱聯絡</span>
    </a>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavMenu extends Vue {
  menu: any[] = [
    {
      title: '社區輕旅行',
      route: 'Travel',
    },
    {
      title: '社區介紹',
      route: 'Introduction',
    },
    {
      title: '社區環保',
      route: 'EnvProtection',
    },
    {
      title: '社區產業',
      route: 'Industry',
    },
    {
      title: '社區福利',
      route: 'Welfare',
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '@/scss/modules/navmenu.scss';
</style>