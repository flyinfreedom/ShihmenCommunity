<template>
  <section class="home__news">
    <div class="inner">
      <h2>活動消息</h2>
      <div class="news" v-for="(news, i) in newsData" :key="i">
        <span class="date">{{ news.date }}</span>
        <p class="content">{{ news.content }}</p>
      </div>
      <div class="more-news">
        <router-link :to="{ name: 'News'}">更多消息 ></router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DB } from "@/firebase/db";
import { News as INewsResponse } from "@/models/news";

@Component
export default class HomeNews extends Vue {
  newsData: INewsResponse[] = [];

  created() {
    this.getNewsAsync();
  }

  async getNewsAsync() {
    const newsRef = DB.collection('news');
    try {
      await newsRef.orderBy('date', 'desc').limit(2).get().then(snapshot => {
        snapshot.forEach(doc => {
          this.newsData.push(doc.data() as INewsResponse);
        })
      });
    } catch(err) {
      console.log(err);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/modules/home-news.scss';
</style>