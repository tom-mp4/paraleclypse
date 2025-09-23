<script setup>
</script>

<template>
  <div class="movies">
    <div class="catalog">
      <div class="movieGridHeader">
        <h2 class="movieGridTitle">
          Ventes & Festivals
        </h2>
        <div class="line"></div>
      </div>
      <div class="movieGrid">
        <a class="moviePoster">
          <img src="@/assets/posters/atd.jpg" alt="Affiche All This Death">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/har.jpg" alt="Affiche Harmonie">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/gdf.jpg" alt="Affiche Générique de Fin">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/lfaf.jpg" alt="Affiche La Fleur Au Fusil">
        </a>
      </div>
    </div>
    <div class="catalog">
      <div class="movieGridHeader">
        <h2 class="movieGridTitle">
          En salle - Programme de courts
        </h2>
        <div class="line"></div>
      </div>
      <div class="movieGrid">
        <a class="moviePoster">
          <img src="@/assets/posters/lbc.jpg" alt="Affiche Les Belles Cicatrices">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/adial.jpg" alt="Affiche A Day In A Life">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/app.jpg" alt="Affiche A Period Piece">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/maurice.jpg" alt="Affiche Maurice's Bar">
        </a>
        <a class="moviePoster">
          <img src="@/assets/posters/amh.png" alt="Affiche À Marée Haute">
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.movies {
  display: flex;
  flex-direction: column;
  gap: 6rem;

  .catalog {
    display: flex;
    flex-direction: column;
    align-items: center;

    .movieGridHeader {
      display: flex;
      flex-direction: column;
      width: 90%;
      gap: 0.6rem;

      .movieGridTitle {
        font-family: Syne, sans-serif;
        font-weight: 600;
        font-size: 1.6rem;
      }

      .line {
        width: 40%;
        border-bottom: black 1px solid;
      }
    }

    .movieGrid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
      width: 90%;

      .moviePoster {
        width: 100%;
        height: 100%;
        background-color: #1f1f1f;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

</style>
