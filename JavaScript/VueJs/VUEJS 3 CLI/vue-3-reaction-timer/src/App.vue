<template>
  <h1>Mohamed EL YONOUSI</h1>
  <button class="btn-primary" @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @stop-timer="stopGame" />
  <Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";
export default {
  name: "App",
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  components: {
    Block,
    Results,
  },
  methods: {
    start() {
      this.delay = (2000 + Math.random() * 5000).toFixed(0);
      this.isPlaying = true;
      this.showResults = false;
    },
    stopGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-primary{
  background-color: #0faf87;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
.btn-primary[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
