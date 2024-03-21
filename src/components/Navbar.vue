<script setup>
</script>

<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="@/assets/logo/logo-profil-blanc.svg" alt="Logo pour menu paraleclypse blanc">
    </router-link>
    <div class="button">
      <router-link class="nav" to="/short-seances">short seance</router-link>
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
  background-color: #1f1f1f;
  align-items: center;
  padding: 1.5rem 1.5rem;

  img {
    width: 40px;
  }

  .button {
    display: flex;
    gap: 1rem;

    a {
      color: white;
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
    gap: 1rem;
  }
  #socialButton {
    display: none;
  }
}

</style>
