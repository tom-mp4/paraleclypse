<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PrivacyContent from '@/components/Legals/PrivacyContent.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="greyLine"></div>
    <div class="legalPlacement">
      <PrivacyContent />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.legalPlacement {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10rem 0;
}

</style>
