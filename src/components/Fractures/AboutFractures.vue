<script setup>

</script>

<template>
  <section class="graphicalCharter">
    <h2>Les Fractures</h2>
    <div class="graphicalCharterDescription">
      <h3>une séance</h3>
      <p>
        Les Fractures sont des séances vous plongeant dans une expérience unique. Le temps d'un
        film, vous pourrez découvrir les oeuvres d'artistes de tous envergures à travers leur
        court-métrage. C'est pendant 75 à 90 minutes que nous vous proposons d'être transporté,
        par une dizaine d'oeuvres courtes de fiction, d'animation ou de documentaire.
      </p>
    </div>
    <div class="graphicalCharterDescription">
      <h3>en bref</h3>
      <p>
        Les Fractures, c'est mettre sur le devant de la scène des oeuvres émergentes et ambitieuses,
        pour un publique curieux et avide de découvertes.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">

.graphicalCharter {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .graphicalCharterDescription {
    display: flex;
    flex-direction: column;
    width: 30%;
    text-align: justify;
    gap: 0.7rem;

    h3 {
      font-family: Syne, sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: #aeaeae;
    }
  }

  .blackLogo {
    width: 7%;
  }
}

@media (max-width: 800px) {
  .graphicalCharter {
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      text-align: center;
    }

    .graphicalCharterDescription {
      width: 100%;
      font-size: 16px;
      gap: 2rem;

      .graphicalCharterButton {
        font-size: 14px;
        text-decoration: underline;
      }
    }

    .blackLogo {
      width: 35%;
    }
  }
}

</style>
