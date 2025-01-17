export const useMainStore = defineStore("main", {
  state: () => ({
    posts: [
      {
        title: "Sample title",
        publishDate: "17.01.2025",
      },
      {
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
});
