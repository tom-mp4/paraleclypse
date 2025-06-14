<script setup>
</script>

<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="@/assets/logo/logo-white.png" alt="Logo de menu paraleclypse blanc">
    </router-link>
    <div class="button">
      <a class="nav" target="_blank" href="https://seancesfractures.fr">fractures</a>
      <router-link class="nav" to="/movies">line up</router-link>
      <router-link class="nav" to="/about">à propos</router-link>
      <router-link class="nav" to="/contact">contact</router-link>
    </div>
    <div id="socialButton" class="button">
      <a href="https://instagram.com/paraleclypse" target="_blank" class="socialButton">instagram</a>
      <p>/</p>
      <a href="https://www.linkedin.com/company/paraleclypse/" target="_blank" class="socialButton">linkedin</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 5rem;

  img {
    width: 180px;
  }

  .button {
    display: flex;
    gap: 1.5rem;

    a {
      color: #ffffff;
      text-transform: uppercase;
      font-family: Syne, sans-serif;
      transition: all ease 0.3s;

      &:hover {
        color: #cccccc;
      }
    }

    p {
      color: #737373;
    }
  }
}

@media (max-width: 800px) {

  .navbar {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0;

    .button {
      display: flex;
      justify-content: center;
      width: fit-content;
      font-size: 14px;

    }
  }

  #socialButton {
    display: none;
  }
}

</style>
