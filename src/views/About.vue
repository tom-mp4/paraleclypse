<script setup>
import WhiteNavbar from '@/components/WhiteNavbar.vue';
import AboutTitle from '@/components/About/AboutTitle.vue';
import AboutDescription from '@/components/About/AboutDescription.vue';
import CompanyHistory from '@/components/About/CompanyHistory.vue';
import Footer from '@/components/Footer.vue';
import GraphicalCharter from '@/components/About/GraphicalCharter.vue';
</script>

<template>
  <div class="about">
    <div>
      <WhiteNavbar />
      <div class="greyLine"></div>
      <AboutTitle />
      <AboutDescription />
    </div>
    <CompanyHistory />
    <div id="divider" class="greyLine"></div>
    <GraphicalCharter />
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.about {
  display: flex;
  flex-direction: column;
  gap: 15vh;
}

</style>
