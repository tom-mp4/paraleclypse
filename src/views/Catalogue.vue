<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Catalogue from '@/components/Catalogue/Movies.vue';
</script>

<template>
  <div class="catalogue">
    <div>
      <Navbar />
      <div class="greyLine"></div>
    </div>
    <Catalogue />
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.catalogue {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

</style>
