<script setup>
</script>

<template>
  <section class="cinemaMap">
    <div class="cinemaMapContent">
      <h2 class="mapTitle">
        Les courts-métrages en salle.
      </h2>
      <p>
        Paraleclypse propose des séances de courts-métrages avec ses cinémas partenaires.
        Notre programmation s'articulent autour de thématique composées d'œuvres distribuées par
        Paraleclypse et d'autre projets.
      </p>
      <a id="cinemaMapButton"
         target="_blank"
         href="https://seancesfractures.fr"
         class="callToAction">
        découvrir la sélection
      </a>
    </div>
    <div class="cinemaMapIllustration">
      <img src="@/assets/img/lucernaire.jpg"
           alt="Photo du cinéma Lucernaire à Paris"
           class="cinemaIllustration"
      >
    </div>
  </section>
</template>

<style scoped lang="scss">

.cinemaMap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  width: 80vw;
  /*background-image: url('../../assets/img/cinema.jpg');
  background-size: cover;
  background-position: bottom center;*/

  .cinemaMapContent {
    display: flex;
    flex-direction: column;

    width: 55%;
    gap: 15px;

    color: black;

    .mapTitle {
      font-family: Syne, sans-serif;
      text-transform: uppercase;
      font-size: 36px;
      font-weight: 600;
      line-height: 40px;
    }

    p {
      line-height: 25px;
      font-size: 18px;
    }

    #cinemaMapButton {
      width: 40%;
    }
  }

  .cinemaMapIllustration {
    width: 35%;

    .cinemaIllustration {
      width: 100%;
    }
  }
}

@media (max-width: 800px) {
  .cinemaMap {
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
    align-items: center;
    text-align: center;
    gap: 3rem;

    .cinemaMapContent {
      align-items: center;
      width: 90%;

      .mapTitle {
        font-size: 24px;
        line-height: 30px;
      }

      p {
        font-size: 14px;
        line-height: 20px;
      }

      #cinemaMapButton {
        width: 70%;
        font-size: 0.7rem;
      }
    }

    .cinemaMapIllustration {
      width: 90%;
    }
  }
}

</style>
