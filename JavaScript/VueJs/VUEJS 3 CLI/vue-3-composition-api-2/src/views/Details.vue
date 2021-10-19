<template>
  <div class="details">
    <div v-if="error">{{error}}</div>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
    </div>
    <div v-else>loading..</div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  name: "Details",
  created() {},
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();
    return { post, error };
  },
  methods: {},
};
</script>

<style scoped>
.details{
  max-width: 1200px;
  margin: 0 auto;
}

.details p{
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre{
  white-space: pre-wrap;
}
</style>
