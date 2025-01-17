<script setup lang="ts">
import { useMainStore } from "~/store";

const route = useRoute();
const store = useMainStore();
const title = ref("");
const isEditing = ref<Boolean>(route.params.id.length ? true : false);

if (isEditing.value) {
  const post = store.getPostById(Number(route.params.id));
  if (post) {
    title.value = post.title;
  } else {
    navigateTo("/edit");
  }
}

const onSave = () => {
  if (isEditing.value) {
    store.updatePost(Number(route.params.id), title.value);
  } else {
    store.addPost(title.value);
  }
};
</script>

<template>
  <div class="container">
    <input class="input" v-model="title" />
    <button @click="onSave">Сохранить</button>
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
