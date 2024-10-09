<script setup>

</script>

<template>
  <section class="companyHistory">
    <p>
      Paraleclypse a été créé en 2020 par Tom Martin et Léo Prudhomme. Respectivement réalisateur
      et artiste 3D, l'idée était d'avoir une structure permettant de signer collectivement un
      premier clip vidéo.
    </p>
    <p>
      Depuis les ambitions ont évoluées et le projet a changé.
      Paraleclypse est devenue une société de production et de distribution axée autour de la
      création de fiction et particulièrement de court-métrage.
    </p>
    <p>
      Aujourd'hui, Paraleclypse, à travers les séances Fractures, propose de distribuer le
      court-métrage dans les cinémas. L'objectif est de connecter un publique curieux de
      découvrir un cinéma nouveau, jeune et audacieux, sous une toute nouvelle forme.
    </p>
  </section>
</template>

<style scoped lang="scss">

.companyHistory {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  width: 100%;

  p {
    width: 35%;
    font-size: 1.2em;
  }
}

@media (max-width: 800px) {
  .companyHistory {
    p {
      width: 80%;
      font-size: 16px;
    }
  }
}

</style>
