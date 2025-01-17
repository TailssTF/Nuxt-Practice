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
      <p>{{ post.publishDate }}</p>
    </div>
  </div>
</template>

<style>
.post {
  border: 1px solid black;
  width: 300px;
}
</style>
