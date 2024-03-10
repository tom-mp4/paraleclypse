<script setup>

</script>

<template>
  <div class="notFound">
    <img alt="Illustration erreur 404" src="@/assets/illustrations/confrontation.svg">
    <div class="text">
      <div>
        <h1>Page introuvable</h1>
        <p>Désolé, la page que vous cherchez n'existe pas.</p>
      </div>
      <router-link to="/" class="callToAction">Retourner à l'accueil</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 8rem;

  .text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  img {
    width: 25%;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: Syne, sans-serif;
  }

  p {
    font-size: 1.2rem;
  }

  .callToAction {
    color: white;
    padding: 1rem 2rem;
    width: fit-content;
  }
}

</style>
