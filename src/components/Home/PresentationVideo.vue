<script setup>
</script>

<template>
  <video autoplay muted loop class="presentingVideo">
    <source class="videoBackground" src="@/assets/video/background.mp4" type="video/mp4">
  </video>
</template>

<style scoped lang="scss">

.presentingVideo {
  width: 100%;
}

@media (max-width: 800px) {
  .presentingVideo {
    rotate: 90deg;
    height: 90vw;
  }
}

</style>
