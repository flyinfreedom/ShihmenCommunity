<template>
  <header class="nav-menu__wrapper">
    <h1>
      <router-link class="title" :to="{ name: 'Home' }">
        <img src="https://fakeimg.pl/300/" class="logo" alt="shihmen-community-logo">
        <span class="content">
          <span>桃園龍潭區</span>石門社區發展協會
        </span>
      </router-link>
    </h1>
    <nav class="nav__wrapper">
      <div :class="['nav-hamburger', hamburgerClass]" @click="toggleNav">
        <div class="ham" />
        <span class="content">Menu</span>
      </div>
      <transition name="fade">
        <div class="nav" v-show="isNavDisplay">
          <ul class="nav-menu">
            <li class="menu__item" v-for="item in menu" :key="item.route">
              <router-link :to="{ name: item.route }">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
    <a class="mail-connection" href="mailto:shihmencommunity@gmail.com">
      <img src="https://fakeimg.pl/300/" class="mail-icon" alt="mail-icon">
      <span>信箱聯絡</span>
    </a>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

enum BreakPoint {
  Tablet = 1200,
  Mobile = 600,
}

@Component
export default class NavMenu extends Vue {
  menu: any[] = [
    {
      title: '首頁',
      route: 'Home',
    },
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

  isNavDisplay = false;

  created() {
    this.navDisplay();
    window.addEventListener('resize', this.navDisplay);
  }

  @Watch('$route')
  onRouteChange() {
    this.navDisplay();
  }

  get hamburgerClass() {
    return this.isNavDisplay ? 'is-active' : '';
  }

  navDisplay() {
    if (window.innerWidth >= BreakPoint.Tablet) {
      this.isNavDisplay = true;
    } else {
      this.isNavDisplay = false;
    }
  }

  toggleNav() {
    this.isNavDisplay = !this.isNavDisplay;
  }

  destroyed() {
    window.removeEventListener('resize', this.navDisplay);
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/modules/navmenu.scss';
</style>