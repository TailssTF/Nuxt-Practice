<script setup lang="ts">
import { useMainStore } from "~/store";

useHead({
  title: "Nuxt Practice",
});
const store = useMainStore();
const { filterPosts } = storeToRefs(store);
const search = ref("");
</script>

<template>
  <div>
    <p>Список постов:</p>
    <div>
      <input type="search" class="search" v-model="search" />
      <button class="button">Добавить</button>
    </div>

    <div v-if="!filterPosts(search).length">
      <p>Нет постов для отображения</p>
    </div>
    <div v-else>
      <div v-for="post in filterPosts(search)" class="post">
        {{ post.title }}
        <br />
        <span class="date">{{ post.publishDate }}</span>

        <div class="buttons">
          <button class="button">Изменить</button>
          <button class="button" @click="store.deletePost(post.id)">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  margin: 0 4px 8px 0;
}

.button:not(:last-of-type) {
  margin-right: 8px;
}

.post {
  border: 1px solid black;
  border-radius: 4px;
  width: 300px;
  padding: 8px;
  margin-bottom: 8px;

  .buttons {
    display: flex;
    width: 100%;
    justify-content: end;
  }
}
.date {
  font-size: small;
  color: grey;
}
</style>
