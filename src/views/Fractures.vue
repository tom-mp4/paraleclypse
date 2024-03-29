<script setup>

import FracturesLanding from '@/components/Fractures/FracturesLanding.vue';
import Programming from '@/components/Fractures/Programming.vue';
import Navbar from '@/components/Navbar.vue';
import AboutFractures from '@/components/Fractures/AboutFractures.vue';
</script>

<template>
  <div class="fractures">
    <div class="fracturesBackground">
      <Navbar />
      <FracturesLanding />
    </div>
    <Programming />
    <div class="greyLine"></div>
    <AboutFractures />
    <div class="greLine"></div>
  </div>

</template>

<style scoped lang="scss">

.fractures {
  display: flex;
  flex-direction: column;
  gap: 12vh;

  .fracturesBackground {
    background-image: url("../assets/img/fractures-background.png");
    background-size: cover;
    background-position: center;

    .navbar {
      background-color: transparent;
    }

    .line {
      width: 100%;
    }
  }
}

</style>
