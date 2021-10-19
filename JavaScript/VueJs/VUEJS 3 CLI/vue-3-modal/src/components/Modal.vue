<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="close" @click="closeModal">X</div>
      <slot name="route"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    closeModal() {
      this.$emit("close-modale");
    },
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  top: 0;
  position: fixed;
  background-color: #00000080;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  .close {
    width: fit-content;
    float: right;
    padding: 6px;
    font-weight: bold;
    cursor: pointer;
  }
}
.modal {
  width: 60%;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
  .body {
    p {
      font-style: normal;
    }
  }
  .header {
    text-align: center;
    background-color: #f1efef;
    padding: 6px;
    border-radius: 6px;
  }

  .footer {
    text-align: center;
    background-color: #f1efef;
    padding: 6px;
    border-radius: 6px;
    font-size: 10pt;
  }
  .route{
    text-decoration: none;
  }
}
</style>
