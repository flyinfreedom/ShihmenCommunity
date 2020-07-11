<template>
  <BaseLayout
    class="news__wrapper"
    title="活動消息"
    sub-title="News"
    topBackgroundImage="news/main-banner.jpg"
    >
    <div class="inner">
      <section class="news" v-for="(news, i) in newsData" :key="i">
        <h3 class="date">{{ news.date }}</h3>
        <p class="content">{{ news.content }}</p>
      </section>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/BaseLayout.vue';
import { DB } from "@/firebase/db";
import { INews } from "@/models/news";

@Component({
  components: { BaseLayout }
})
export default class News extends Vue {
  newsData: INews[] = [];

  created() {
    this.getNewsAsync();
  }

  async getNewsAsync() {
    const newsRef = DB.collection('news');
    try {
      await newsRef.orderBy('date', 'desc').limit(20).get().then(snapshot => {
        // const lastVisible = snapshot.docs[snapshot.docs.length-1];
        // console.log("last", lastVisible);
        snapshot.forEach(doc => {
          this.newsData.push(doc.data() as INews);
        })
      });
    } catch(err) {
      console.log(err);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/pages/news.scss';
</style>