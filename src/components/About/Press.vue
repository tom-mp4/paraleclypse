<script setup>

</script>

<template>
  <section class="press">
    <h2>Presse</h2>
    <div class="pressLink">
      <h3>sud ouest</h3>
      <div>
        <a class="pressButton" href="">
          Paradoxa au cinéma
          <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
        </a>
        <a class="pressButton" href="">
          Première diffusion
          <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
        </a>
      </div>
    </div>
    <div class="pressDescription">
      <p>
        Pour toutes demandes de presse, merci de nous contacter à l'adresse suivante :
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">

.press {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .pressLink {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: justify;
    gap: 1.2rem;

    h3 {
      font-family: Syne, sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: #aeaeae;
    }

    .pressButton {
      display: flex;
      align-items: center;
      color: black;
      font-family: Syne, sans-serif;
      text-transform: uppercase;
      gap: 0.3rem;
      font-size: 18px;

      .arrow {
        width: 3%;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .pressDescription {
    width: 25%;
  }
}

</style>
