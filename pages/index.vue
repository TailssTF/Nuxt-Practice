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
      <p>{{ post.title }}</p>
      <p class="date">{{ post.publishDate }}</p>
    </div>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid black;
  border-radius: 4px;
  width: 300px;
  padding: 0 8px;
}
.date {
  font-size: small;
  color: grey;
}
</style>
