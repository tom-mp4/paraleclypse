<script setup>
</script>

<template>
  <section class="aboutFracture">
    <h2>Les Fractures</h2>
    <div class="aboutFractureDescription">
      <h3>une séance</h3>
      <p>
        Les Fractures sont des séances vous plongeant dans une expérience unique. Le temps d'un
        film, vous pourrez découvrir les oeuvres d'artistes de tous envergures à travers leur
        court-métrage. C'est pendant 75 à 90 minutes que nous vous proposons d'être transporté,
        par une dizaine d'oeuvres courtes de fiction, d'animation ou de documentaire.
      </p>
    </div>
    <div class="aboutFractureDescription">
      <h3>en bref</h3>
      <p>
        Les Fractures, c'est mettre sur le devant de la scène des oeuvres émergentes et ambitieuses,
        pour un publique curieux et avide de découvertes.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">

.aboutFracture {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .aboutFractureDescription {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 0.7rem;

    h3 {
      font-family: Syne, sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: #aeaeae;
    }
  }
}

@media (max-width: 800px) {
  .aboutFracture {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 3rem;

    h2 {
      text-align: center;
    }

    .aboutFractureDescription {
      width: 100%;
      font-size: 16px;
      gap: 2rem;
    }
  }
}

</style>
