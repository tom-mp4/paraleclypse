<script setup>

import FracturesLanding from '@/components/Fractures/FracturesLanding.vue';
import Programmation from '@/components/Fractures/Programmation.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="fractures">
    <div class="fracturesBackground">
      <Navbar />
      <div class="line"></div>
      <FracturesLanding />
    </div>
    <Programmation />
  </div>

</template>

<style scoped lang="scss">

.fracturesBackground {
  background-image: url("../assets/img/fractures-background.jpeg");
  background-size: cover;
  background-position: center;

  .navbar {
    background-color: transparent;
  }

  .line {
    width: 100%;
  }
}

</style>
