<template>
  <div class="presentingVideo">
    <video autoplay muted loop playsinline>
      <source src="@/assets/video/trailer2.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">

.presentingVideo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;

  }
}

</style>
