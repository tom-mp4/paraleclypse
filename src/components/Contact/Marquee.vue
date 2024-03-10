<script setup>
import { Vue3Marquee } from 'vue3-marquee';
</script>

<template>
    <Vue3Marquee clone duration="40">
      <div class="marqueeContent">
        <p>Contactez nous</p>
        <div class="marqueeSeparator"></div>
        <p>Contact us</p>
        <div class="marqueeSeparator"></div>
        <p>Contáctenos</p>
        <div class="marqueeSeparator"></div>
      </div>
    </Vue3Marquee>
</template>

<style scoped lang="scss">

.marqueeContent {
  display: flex;
  gap: 100px;
  padding-right: 100px;
  color: white;
  font-size: 10rem;
  font-weight: 600;
  font-family: Syne, sans-serif;
  text-transform: uppercase;

  .marqueeSeparator {
    border-right: 2px solid #5b5b5b;
  }
}

</style>
