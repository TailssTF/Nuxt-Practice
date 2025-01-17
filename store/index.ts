export const useMainStore = defineStore("main", {
  state: () => ({
    nextId: 2,
    posts: [
      {
        id: 0,
        title: "Sample title",
        publishDate: "17.01.2025",
      },
      {
        id: 1,
        title: "Sample title 2",
        publishDate: "17.01.2025",
      },
    ],
  }),
  getters: {
    filterPosts: (state) => {
      return (string = "") =>
        state.posts.filter((post) => post.title.includes(string));
    },
  },
  actions: {
    deletePost(id: Number) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    addPost(title: string) {
      this.posts.push({
        id: this.nextId++,
        title,
        publishDate: new Date().toLocaleDateString("ru-RU"),
      });
      navigateTo("/");
    },
  },
});
