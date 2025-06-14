<script setup>

</script>

<template>
  <section class="companyDescription">
    <p>
      Paraleclypse est un studio indépendant de distribution. Nous travaillons avec
      des oeuvres de fiction, d'animation et de documentaire pour le cinéma, les festivals et les
      ventes. Notre objectif est de faire découvrir un cinéma différent, dont le format court en est
      le medium.
    </p>
  </section>
</template>

<style scoped lang="scss">
  .companyDescription {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    p {
      font-size: 1.1em;
      text-transform: uppercase;
      text-align: justify;
      color: #aeaeae;
      font-family: Syne, sans-serif;
      width: 25%;
      padding: 0 3rem;
    }
  }

  @media (max-width: 800px) {
    .companyDescription {
      p {
        width: 100%;
        font-size: 14px;
        padding: 0;
      }
    }
  }
</style>
