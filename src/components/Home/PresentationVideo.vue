<script setup>
</script>

<template>
  <video autoplay muted loop class="presentingVideo">
    <source class="videoBackground" src="@/assets/video/background.mp4" type="video/mp4">
  </video>
  <video autoplay muted loop class="verticalPresentingVideo">
    <source class="videoBackground" src="@/assets/video/vertical-background.mp4" type="video/mp4">
  </video>
</template>

<style scoped lang="scss">

.presentingVideo {
  width: 100%;
}

.verticalPresentingVideo {
  display: none;
}

@media (max-width: 800px) {
  .presentingVideo {
    display: none;
  }

  .verticalPresentingVideo {
    display: block;
    width: 100%;
  }
}

</style>
