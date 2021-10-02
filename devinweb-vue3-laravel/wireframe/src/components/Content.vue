<template>
  <div class="container-sm">
    <div class="text-center">
      <p class="text-uppercase text-black-50">get x2 more leads</p>
      <h1 class="h1">Automate your Users</h1>
      <p class="text-muted">
        This is a wider card with supporting text below as a natural lead-in to<br />
        additional content. This content is a little bit longer.
      </p>
    </div>

    <div class="card mt-5 border-0" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="card border-0" style="width: 100%">
            <img
              src="https://source.unsplash.com/1600x900/?progrmaing,coding"
              class="card-img-top img-fluid rounded-start"
              alt="image-1"
            />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text</p>
            </div>
          </div>
        </div>
        <div class="col-md-8 float-right">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum nulla
              maxime reprehenderit harum dicta distinctio et, placeat dolorem a illo,
              nisi, unde veniam voluptatum? Tempora excepturi magnam quam unde.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-5 border-0" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-8 float-right">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer. This is a wider
              card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer. This is a wider card with supporting
              text below as a natural lead-in to additional content. This content is a
              little bit longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0" style="width: 100%">
            <img
              src="https://source.unsplash.com/1400x800/?progrmaing,coding"
              class="card-img-top img-fluid rounded-start"
              alt="image-1"
            />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Section/>
</template>

<script>
import Section from "@/components/Section.vue";

export default {
  name: "Content",
  components: {
    Section,
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 20pt;
}
</style>
