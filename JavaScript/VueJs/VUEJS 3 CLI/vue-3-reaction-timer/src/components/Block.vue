<template>
  <div class="block" v-if="showBlock">
    <button class="btn-primary" type="button" @click="stopTimer">
      {{ startStop === true ? "stop" : "start" }}
    </button>
    <br />
    {{ reactionTimer }}
  </div>
</template>

<script>
export default {
  name: "Block",
  created() {},
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTimer: 0,
      startStop: false,
    };
  },
  props: {
    delay: {
      type: null,
      required: true,
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  // updated() {
  //   console.log("updated");
  // },
  // unmounted(){
  //   console.log('unmounted')
  // },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer++;
        this.startStop = true;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("stop-timer", this.reactionTimer);
    },
  },
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
.btn-primary {
  background-color: white;
  color: #0faf87;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
  outline: none;
  border: none;
}
</style>
