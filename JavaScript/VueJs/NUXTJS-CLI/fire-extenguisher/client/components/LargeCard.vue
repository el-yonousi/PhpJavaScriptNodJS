<template>
  <NuxtLink :to="`/products/${card.id}`" class="card">
    <!-- <img
      class="image"
      :src="require(`~/assets/images/${card.image || 'fe1.jpg'}`)"
      :alt="card.title"
    /> -->
    <img
      class="image"
      :src="card.image"
      :alt="card.title"
    />
    <h3 class="header">{{ card.title }}</h3>
    <p class="snippet">
      {{ card.snippet }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: grey;
}
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  color: black;
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>
