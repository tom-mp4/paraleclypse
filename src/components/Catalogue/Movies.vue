<script setup>
</script>

<template>
  <div class="movies">
    <div class="movieGrid">
      <a class="moviePoster">
        <img src="@/assets/posters/adial.jpg" alt="">
      </a>
      <a class="moviePoster">
        <img src="@/assets/posters/app.jpg" alt="">
      </a>
      <a class="moviePoster">
        <img src="@/assets/posters/maurice.jpg" alt="">
      </a>
      <a class="moviePoster">
        <img src="@/assets/posters/amh.png" alt="">
      </a>
    </div>
  </div>

</template>

<style scoped lang="scss">

.movies {
  display: flex;
  flex-direction: column;
  align-items: center;

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

</style>
