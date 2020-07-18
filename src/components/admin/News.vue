<template>
  <div class="news-manager">
    <h3>設定活動消息</h3>
    <router-link :to="{ name: 'Home' }">返回首頁</router-link>
    <div>
      <button @click="toggleCreatBlock()" class="toggleBtn">{{ openCreatBlock ? '取消新增' : '新增活動消息' }}</button>
      <div v-if="openCreatBlock">
        <label>活動日期</label>
        <input class="input" type="text" v-model="activeDate">
        <label>活動簡述</label>
        <textarea class="input textarea" v-model="activeContent"></textarea>
        <button @click="creatNews" class="createBtn">新增活動</button>
      </div>
    </div>
    <div class="news-list">
      <div class="news" v-for="(news, i) in newsData" :key="i">
        <button class="delete-news" @click="deleteNews(news.id)">刪除</button>
        <span class="date">{{ news.data.date }}</span>
        <p class="content">{{ news.data.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DB } from "@/firebase/db";
import { News as INewsResponse } from "@/models/news";

interface NewsDoc{
  id: string;
  data: INewsResponse;
}

@Component
export default class News extends Vue {  
  newsData: NewsDoc[] = [];
  showCreate: boolean = false;

  activeDate: string = '';
  activeContent: string = '';
  defaultDateStr: string = '';

  created() {
    const now = new Date();
    this.defaultDateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    this.activeDate = this.defaultDateStr;
    this.getNewsAsync();
  }

  creatNews() {
    const self = this;
    if(!this.activeDate || !this.activeContent) {
      alert('請確認資料正確輸入');
      return;
    }
    const news = { date: this.activeDate, content: this.activeContent} as INewsResponse;
    const newsRef = DB.collection('news');
    newsRef.add(news)
    .then(function(docRef) {
        alert('新增成功!');
        self.showCreate = false;
    })
    .catch(function(error) {
        alert('新增失敗!');
    });
    this.getNewsAsync();
  }

  get openCreatBlock(): boolean {
    return this.showCreate;
  }

  toggleCreatBlock(): void {
    this.showCreate = !this.showCreate;
    if(!this.showCreate) {
      this.activeDate = this.defaultDateStr;
      this.activeContent = '';
    }
  }

  async deleteNews(newsId: string) {
    const newsRef = DB.collection('news');
    if(confirm('確定要刪除嗎?')) {
      await newsRef.doc(newsId).delete().then(function() {
        alert('刪除成功!');
      }).catch(function(error) {
        alert('刪除失敗!\n' + error);
      });
    }
    this.getNewsAsync();
  }

  async getNewsAsync() {
    this.newsData = [];
    const newsRef = DB.collection('news');
    try {
      await newsRef.orderBy('date', 'desc').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.newsData.push({ id: doc.id, data: doc.data() } as NewsDoc);
        })
      });
    } catch(err) {
      console.log(err);
    }
  }
}
</script>

<style>
  #app {
    overflow: auto !important;
    padding-top: 1.5em !important;
    padding: 1.5em;
  }

  .input {
    border: 1px solid #999;
    border-radius: 0.5em;
    display: block;
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
  }

  .textarea {
    min-height: 100px;
  }

  .news-manager {
    line-height: 1.5em;
    color: #333;
  }

  .news-manager > h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 1.5em;
  }

  .date {
    line-height: 2em;
  }

  .delete-news {    
    line-height: 1em;
    font-size: 0.75em;
    padding: 0.5em 1em;
    border: 1px solid #999;
    border-radius: 0.5em;
    position: absolute;
    right: 0px;
    background-color: #f33;
    color:#fff;
  }

  .news {
    border-bottom: 1px solid #ccc;
    padding-bottom: 1em; 
    position: relative;
    margin-bottom: 1em;
  }

  .content {
    margin-top: 0.5em;
  }

  .router-link-active {
    font-size:12px;
    border: 1px solid #999;
    background-color: #fff;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    position: fixed;
    right: 0px;
    top: 0px;
    margin: 1.5em;
    z-index: 9;
  }

  .toggleBtn {
    border: 1px solid #999;
    background-color: #fff;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    margin-bottom: 1em;
  }

  .createBtn {
    border: 1px solid #999;
    background-color: #fff;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    width: 100%;
    text-align: center;
    background-color: beige;    
  }
</style>
