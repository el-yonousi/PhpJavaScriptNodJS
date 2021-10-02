<template>
  <div class="footer container-sm text-center">
    <div class="description">
      <span class="text-uppercase">Join the ranks over 7000 +</span>
      <h5>Get Started with Our Company</h5>
      <p class="descriptionText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        quos! Aperiam quos maxime repellat molestiae at facere autem illo suscipit
        debitis<br />
        vitae? Laboriosam labore tempore quis esse accusamus rerum.
      </p>
      <button class="btn text-uppercase">contribut</button>
    </div>
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col">
        <p class="text-uppercase">{{ item.title }}</p>
        <ul v-for="subitem in item.subItems" :key="subitem.id" class="navbar-nav">
          <li>
            <router-link class="text-capitalize nav-link" v-bind:to="subitem.path">{{
              subitem.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <img src="@/assets/img/logo.png" alt="logo" />
      <div class="text-uppercase">the most rellabale platform for building</div>
      <div class="">Copy Right {{ new Date().getFullYear() }} &copy;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      items: [
        {
          title: "home page",
          subItems: [
            {
              name: "content writing",
              path: "/",
            },
            {
              name: "start cruising",
              path: "/",
            },
            {
              name: "how does it work",
              path: "/",
            },
            {
              name: "core features",
              path: "/",
            },
            {
              name: "we have thousands",
              path: "/",
            },
            {
              name: "testimonials",
              path: "/",
            },
            {
              name: "contact us",
              path: "/",
            },
            {
              name: "order content",
              path: "/",
            },
          ],
        },
        {
          title: "main links",
          subItems: [
            {
              name: "our company",
              path: "/",
            },
            {
              name: "about us",
              path: "/",
            },
            {
              name: "market place",
              path: "/",
            },
            {
              name: "free t-Shirts",
              path: "/",
            },
            {
              name: "collaboration",
              path: "/",
            },
            {
              name: "user testing",
              path: "/",
            },
            {
              name: "wrinting labs",
              path: "/",
            },
            {
              name: "security",
              path: "/",
            },
          ],
        },
        {
          title: "for users",
          subItems: [
            {
              name: "our company",
              path: "/",
            },
            {
              name: "about us",
              path: "/",
            },
            {
              name: "market place",
              path: "/",
            },
            {
              name: "free t-Shirts",
              path: "/",
            },
            {
              name: "collaboration",
              path: "/",
            },
            {
              name: "user testing",
              path: "/",
            },
            {
              name: "wrinting labs",
              path: "/",
            },
            {
              name: "security",
              path: "/",
            },
          ],
        },
        {
          title: "resources",
          subItems: [
            {
              name: "our company",
              path: "/",
            },
            {
              name: "about us",
              path: "/",
            },
            {
              name: "market place",
              path: "/",
            },
            {
              name: "free t-Shirts",
              path: "/",
            },
            {
              name: "collaboration",
              path: "/",
            },
            {
              name: "user testing",
              path: "/",
            },
            {
              name: "wrinting labs",
              path: "/",
            },
            {
              name: "security",
              path: "/",
            },
          ],
        },
        {
          title: "all our product",
          subItems: [
            {
              name: "our company",
              path: "/",
            },
            {
              name: "about us",
              path: "/",
            },
            {
              name: "market place",
              path: "/",
            },
            {
              name: "free t-Shirts",
              path: "/",
            },
            {
              name: "collaboration",
              path: "/",
            },
            {
              name: "user testing",
              path: "/",
            },
            {
              name: "wrinting labs",
              path: "/",
            },
            {
              name: "security",
              path: "/",
            },
          ],
        },
        {
          title: "...",
          subItems: [
            {
              name: "our company",
              path: "/",
            },
            {
              name: "about us",
              path: "/",
            },
            {
              name: "market place",
              path: "/",
            },
            {
              name: "free t-Shirts",
              path: "/",
            },
            {
              name: "collaboration",
              path: "/",
            },
            {
              name: "user testing",
              path: "/",
            },
            {
              name: "wrinting labs",
              path: "/",
            },
            {
              name: "security",
              path: "/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.footer {
  margin-top: $margin-30;
  font-style: 100;
  color: $color-gray-primary;
  .description {
    margin-bottom: $margin-30;
    span {
      font-size: 8pt;
    }
    .descriptionText {
      color: $color-gray-secondary !important;
      font-size: 8pt;
    }
    .btn {
      background-color: $color-primary;
      color: $color-gray-secondary;
      font-size: 8pt;
    }
  }
  .row {
    margin-top: $margin-30;
    text-align: left;
    font-size: 10pt;
    .nav-link {
      color: $color-gray-secondary !important;
    }
  }
  .copyright {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 8pt;
    img {
      width: 50px;
    }
  }
}
</style>
