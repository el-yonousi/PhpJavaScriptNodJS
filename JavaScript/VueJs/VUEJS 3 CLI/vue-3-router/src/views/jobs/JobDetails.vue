<template>
  <div v-if="loading">loadig job details...</div>
  <div v-else>
    <h1>Title:: {{ job.title }}</h1>
    <p>Details:: {{ job.details }}</p>
    <p>ID:: {{ job.id }}</p>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  created() {},
  data() {
    return {
      job: Object,
      loading: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {},
  mounted() {
    this.loading = true;
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.job = data;
        this.loading = false;
      })
      .catch((error) => console.error(error.message));
  },
};
</script>

<style scoped></style>
