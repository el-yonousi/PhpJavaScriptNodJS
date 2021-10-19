<template>
  <p>Reaction Time:: {{ score }} ms</p>
  <div class="rank">{{rank}}</div>
</template>

<script>
export default {
  name: "Results",
  created() {},
  data() {
    return {
      rank: null,
    };
  },
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
  methods: {},
  mounted() {
    if (this.score < 5) this.rank = "EL YONOUSI Mohamed";
    else if (this.score < 10) this.rank = "Rapid Reflexes";
    else this.rank = "Snail Pace";
  },
};
</script>

<style scoped>
.rank{
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
}
</style>
