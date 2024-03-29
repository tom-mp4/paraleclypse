<script setup>

</script>

<template>
  <div class="programming">
    <h2>Programmation</h2>
    <div class="movieGrid">
      <a href="" class="moviePoster">
        <img src="@/assets/posters/apf.png" alt="">
      </a>
      <a href="" class="moviePoster">
        <img src="@/assets/posters/paradoxa.jpg" alt="">
      </a>
      <a href="" class="moviePoster">
        <img src="@/assets/posters/lmdf.jpg" alt="">
      </a>
      <a href="" class="moviePoster"></a>
      <a href="" class="moviePoster"></a>
      <a href="" class="moviePoster"></a>
      <a href="" class="moviePoster"></a>
      <a href="" class="moviePoster"></a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.programming {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: Syne, sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
  }

  .movieGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
