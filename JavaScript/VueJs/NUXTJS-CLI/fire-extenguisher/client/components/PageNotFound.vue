<template>
  <div>
    <h1>this {{ params || "page" }} Not Found</h1>
    <!-- <img :src="require('@/assets/images/fe25.jpg')" alt="Not Found" /> -->
    <img
      src="https://images.unsplash.com/photo-1625958936686-a9343dc35b5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlyZSUyMGV4dGluZ3Vpc2hlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Not Found"
    />
  </div>
</template>

<script>
export default {
  props: {
    params: String,
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
}
h1 {
  font-size: 7.5rem;
}
img {
  width: 15rem;
  margin: 0 auto;
}
</style>
