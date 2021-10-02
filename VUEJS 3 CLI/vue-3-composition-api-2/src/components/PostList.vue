<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from "./SinglePost.vue";

export default {
  components: {
    SinglePost,
  },
  name: "PostList",
  created() {},
  data() {
    return {};
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    onMounted(() =>console.log('mounted'))
    onUnmounted(() => console.log('unmounted'))
    onUpdated(() => console.log('updated'))
  },
  methods: {},
};
</script>

<style scoped></style>
