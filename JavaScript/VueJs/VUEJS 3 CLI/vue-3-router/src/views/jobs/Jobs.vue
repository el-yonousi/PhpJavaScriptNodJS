<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h4>{{ job.title }}</h4>
      </router-link>
    </div>
  </div>
  <div v-else>loadig job details...</div>
</template>

<script>
export default {
  name: "Jobs",
  created() {},
  data() {
    return {
      jobs: [],
    };
  },
  props: {},
  methods: {},
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.error(error.message));
  },
};
</script>

<style scoped>
.job h4 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h4:hover {
  background-color: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
