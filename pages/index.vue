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
.post {
  border: 1px solid black;
  border-radius: 4px;
  width: 300px;
  padding: 8px;

  .buttons {
    display: flex;
    width: 100%;
    justify-content: end;

    .button {
      margin-left: 8px;
    }
  }
}
.date {
  font-size: small;
  color: grey;
}
</style>
