<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>loading...</div>
    <!-- <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">delete last post</button> -->
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref } from "@vue/reactivity";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load()
    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>
