<script setup>
</script>

<template>
  <section class="cinemaMap">
    <div class="cinemaMapContent">
      <h2 class="mapTitle">
        Les court-métrages sur le devant de la scène.
      </h2>
      <p>
        Paraleclypse propose les séances Fractures dans tout les cinémas partenaires.
        Notre programmation trimestrielle se compose de productions originales Paraleclypse et
        d'autre projets que nous accompagnons. L'objectif est de provoquer la rencontre entre un
        contenu nouveau et un public curieux.
      </p>
      <a id="cinemaMapButton"
         target="_blank"
         href="/fractures"
         class="callToAction">
        découvrir la sélection
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.cinemaMap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 90%;
  background-image: url('../../assets/img/cinema.jpg');
  background-size: cover;
  background-position: bottom center;

  .cinemaMapContent {
    display: flex;
    flex-direction: column;

    width: 70%;
    gap: 15px;

    color: white;

    .mapTitle {
      font-family: Syne, sans-serif;
      text-transform: uppercase;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
    }

    p {
      line-height: 25px;
      font-size: 22px;
    }

    #cinemaMapButton {
      width: 40%;
    }
  }
}

@media (max-width: 800px) {
  .cinemaMap {
    height: 70vh;
    align-items: flex-end;
    padding: 2rem 0;

    .cinemaMapContent {
      width: 90%;
      align-items: center;
      text-align: center;

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
      }
    }
  }
}

</style>
