<template>
  <div class="container">
    <h1>History</h1>
    <div class="flex">
      <p v-for="(number, index) in history.history" :key="index" :class="activeIndexes(value).includes(index) && 'bold'">
        {{ number }}
      </p>
    </div>

    <input type="number" placeholder="Search by index" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "History",
  data() {
    return {
      value: null ,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"])
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 7rem;
  margin-bottom: 7rem;

  .flex {
    display: flex;
    text-align: justify left;
    width: 25rem;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
    p {
      margin: 1rem;
    }

    .bold{
      font-weight: 700;
    }
  }
}
</style>
