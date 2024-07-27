<script setup>

import FracturesLanding from '@/components/Fractures/FracturesLanding.vue';
import Programming from '@/components/Fractures/Programming.vue';
import Navbar from '@/components/Navbar.vue';
import AboutFractures from '@/components/Fractures/AboutFractures.vue';
import Footer from '@/components/Footer.vue';
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
    <Footer />
  </div>

</template>

<style scoped lang="scss">

.fractures {
  display: flex;
  flex-direction: column;
  gap: 15vh;

  .fracturesBackground {
    background-image: url("../assets/img/fractures-background.jpg");
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
