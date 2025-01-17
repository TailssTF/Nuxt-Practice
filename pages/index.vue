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
    <div>
      <input
        type="search"
        class="search"
        placeholder="Фильтр"
        v-model="search"
      />
      <button class="button" @click="navigateTo('/edit')">Добавить пост</button>
    </div>

    <p>Список постов:</p>

    <div v-if="!filterPosts(search).length">
      <p>Нет постов для отображения</p>
    </div>
    <div v-else>
      <div v-for="post in filterPosts(search)" class="post">
        {{ post.title }}
        <br />
        <span class="date">{{ post.publishDate }}</span>

        <div class="buttons">
          <button class="button" @click="navigateTo('/edit')">Изменить</button>
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
  margin-right: 24px;
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
