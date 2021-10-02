<template>
  <div id="app">
    <h3>it's beatifull modal</h3>
    <Teleport to="#testModal" v-if="showModal">
      <Modal @close-modale="toggleModale">
        <template v-slot:route
          ><router-link class="route" to="/mi">home</router-link></template
        >
        <div class="header">
          <h2>Sign Up</h2>
        </div>
        <div class="body">
          <p>this is a beatifull modal in vue js 3 CLI</p>
          <input type="text" name="" id="" />
        </div>
        <div class="footer">CopyRight {{ new Date().getFullYear() }}&copy;</div>
      </Modal>
    </Teleport>
    <input type="button" @click="toggleModale" value="Open Modal" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModale() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
