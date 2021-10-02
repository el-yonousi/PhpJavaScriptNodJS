<template>
  <div class="header">
    <div class="customRow row">
      <div class="col-sm-6 mt-5">
        <div class="customCard card">
          <div class="card-body">
            <h5 class="card-title">A Simple and fun way to talk with your users</h5>
            <p class="card-text">
              <small>
                supporting text below as a natural lead-in to additional content.</small
              >
            </p>
            <a href="#" class="btnContribute btn mt-2">CONTRIBUTE</a>
          </div>
        </div>
      </div>
      <div id="card" class="col-sm-6 mt-5">
        <div v-for="item in items" :key="item.id" class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  el: "#card",
  data() {
    {
      return {
        items: [
          {
            title: "Special title treatment",
            description:
              "With supporting text below as a natural lead-in to additional content.",
          },
          {
            title: "Special title treatment",
            description:
              "With supporting text below as a natural lead-in to additional content.",
          },
          {
            title: "Special title treatment",
            description:
              "With supporting text below as a natural lead-in to additional content.",
          },
          {
            title: "Special title treatment",
            description:
              "With supporting text below as a natural lead-in to additional content.",
          },
        ],
      };
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 100vh !important;
  background: url(../assets/img/header.svg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;

  .customRow {
    position: absolute;
    right: 0;
    left: 0;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 10em;
  }

  .customCard {
    background-color: transparent;
    color: #d0d3d9;
  }

  .btnContribute {
    background-color: #d0d3d9;
  }
}
</style>
