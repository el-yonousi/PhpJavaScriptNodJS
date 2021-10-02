<template>
  <div class="section text-lg text-center">
    <div class="container-sm">
      <div class="row row-cols-2 bg-dark text-light py-2">
        <div v-for="item in items" :key="item.index" class="col">
          <div class="card">
            <div class="card-body">
              <span class="text-uppercase">{{ item.sub_title }}</span>
              <h5 class="card-title text-capitalize">{{ item.title }}</h5>
              <p class="card-text px-5">
                {{ item.description }}
              </p>
            </div>
            <img v-bind:src="item.image" class="card-img-top" v-bind:alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {
      items: [
        {
          title: "capitalize on leads",
          sub_title: "base integrates",
          image: "https://source.unsplash.com/1900x900/?progrmaing,coding",
          alt: "image descriptio",
          description:
            "Some quick example text to build on the card title and make up the bulk.",
        },
        {
          title: "turn customers into advocates",
          sub_title: "base automatically",
          image: "https://source.unsplash.com/2000x800/?progrmaing,coding",
          alt: "image descriptio",
          description:
            "Some quick example text to build on the card title and make up the bulk.",
        },
        {
          title: "enable a mobile sales team",
          sub_title: "improve your sales",
          image: "https://source.unsplash.com/2100x800/?progrmaing,coding",
          alt: "image descriptio",
          description:
            "Some quick example text to build on the card title and make up the bulk.",
        },
        {
          title: "drive sales actions",
          sub_title: "base #1 rated mobile",
          image: "https://source.unsplash.com/1800x800/?progrmaing,coding",
          alt: "image descriptio",
          description:
            "Some quick example text to build on the card title and make up the bulk.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.section {
  margin-top: $margin-16;
  background-color: $color-primary;
  padding: $padding-16;
  .row {
    background-color: transparent !important;
  }
  .card {
    color: $color-gray-primary;
    text-align: justify;
    .card-title {
      color: $color-gray-secondary;
    }
    .card-text {
      font-size: 10pt;
      padding: $padding-16;
    }
    background-color: transparent;
    text-align: center !important;
    img {
      align-self: center !important;
      width: 50%;
      border-radius: $border-radius-5;
    }
  }
}
</style>
