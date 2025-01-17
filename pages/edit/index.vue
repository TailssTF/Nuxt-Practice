<script setup lang="ts">
import { useMainStore } from "~/store";

const store = useMainStore();
const title = ref("");
</script>

<template>
  <div class="container">
    <input class="input" v-model="title" />
    <button @click="store.addPost(title)">Сохранить</button>
  </div>

  <button @click="navigateTo('/')">Назад</button>
</template>

<style>
.container {
  margin-bottom: 8px;
}
.input {
  margin-right: 8px;
}
</style>
