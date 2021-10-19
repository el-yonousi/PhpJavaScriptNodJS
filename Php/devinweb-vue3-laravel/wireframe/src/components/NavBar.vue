<template>
  <nav class="navBarCustom navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="logo" src="@/assets/img/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">SERVICES</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/team">TEAM</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">LOGIN</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn text-white btnSignUp" to="/signup"
              >SIGN UP</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.logo {
  width: 25px;
  height: 25px;
}
.nav-item {
  color: white !important;
}
.navBarCustom {
  background-color: #151b26 !important;
}
.btnSignUp {
  background-color: #484e59;
  outline: none !important;
}

.btnSignUp:focus {
  outline: none !important;
  border: none !important;
}
</style>
