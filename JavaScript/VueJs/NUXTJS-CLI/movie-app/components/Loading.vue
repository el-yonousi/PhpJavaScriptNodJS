<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes circle-loading {
    from{
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
    animation: circle-loading 1000ms ease-out infinite;
  }
}
</style>