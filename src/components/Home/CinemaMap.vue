<script setup>
</script>

<template>
  <section class="cinemaMap">
    <div class="cinemaMapContent">
      <h2 class="mapTitle">
        Découvrir la sélection.
      </h2>
      <p>
        Paraleclypse propose dans tous les cinémas partenaires, une séance trimestrielle
        programmée avec les productions originales de Paraleclypse et d'autre projets
        que nous accompagnons. L'objectif est de provoquer la rencontre entre un contenu
        nouveau et un public curieux.
      </p>
      <a id="cinemaMapButton"
         target="_blank"
         href="#"
         class="callToAction">
        découvrir les cinémas partenaires
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.cinemaMap {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
  height: 50vh;
  width: 90%;
  background-image: url('../../assets/img/cinema.jpg');
  background-size: cover;
  background-position: bottom;

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
      text-align: justify;
    }

    #cinemaMapButton {
      width: 40%;
    }
  }
}

</style>
