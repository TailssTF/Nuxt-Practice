<script setup lang="ts">
import { useMainStore } from "~/store";

useHead({
  title: "Nuxt Practice",
});
const store = useMainStore();
const { filterPosts } = storeToRefs(store);
const search = ref("");
const showModal = ref(false);
const postId = ref<Number>(-1);

const onOpenModal = (id: Number) => {
  postId.value = id;
  showModal.value = true;
};
const onDeletePost = () => {
  store.deletePost(postId.value);
  showModal.value = false;
};
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
          <button class="button" @click="navigateTo('/edit/' + post.id)">
            Изменить
          </button>
          <button class="button" @click="onOpenModal(post.id)">Удалить</button>
        </div>
      </div>
    </div>

    <Teleport to="#teleports">
      <Modal :show="showModal" @cancel="showModal = false">
        <template #header>
          <h3>Удалить пост?</h3>
        </template>
        <template #footer>
          <button @click="onDeletePost">Да</button>
        </template>
      </Modal>
    </Teleport>
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
