<script setup>
</script>

<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="@/assets/logo/logo-black.png" alt="Logo de menu paraleclypse noir">
    </router-link>
    <div class="button">
      <router-link class="nav" to="https://seancesfractures.fr">fractures</router-link>
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
    gap: 1rem;

    a {
      color: #1f1f1f;
      text-transform: uppercase;
      font-family: Syne, sans-serif;
      transition: all ease 0.3s;

      &:hover {
        color: #737373;
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
    gap: 1rem;
    padding: 2.5rem 0;

    .button {
      display: flex;
      justify-content: center;
      width: fit-content;
    }
  }

  #socialButton {
    display: none;
  }
}

</style>
