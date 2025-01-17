<script setup lang="ts">
import { useMainStore } from "~/store";

useHead({
  title: "Nuxt Practice",
});
const store = useMainStore();
</script>

<template>
  <div>
    <p>Список постов:</p>
    <div>
      <input type="search" class="search" />
      <button class="button">Найти</button>
      <button class="button">Добавить</button>
    </div>

    <div v-for="post in store.posts" class="post">
      {{ post.title }}
      <br />
      <span class="date">{{ post.publishDate }}</span>

      <div class="buttons">
        <button class="button">Изменить</button>
        <button class="button">Удалить</button>
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
