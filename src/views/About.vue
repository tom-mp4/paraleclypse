<script setup>
import Navbar from '@/components/Navbar.vue';
import AboutTitle from '@/components/About/AboutTitle.vue';
import AboutDescription from '@/components/About/AboutDescription.vue';
import CompanyHistory from '@/components/About/CompanyHistory.vue';
import Footer from '@/components/Footer.vue';
// import GraphicalCharter from '@/components/About/GraphicalCharter.vue';
import CinemaAdvantages from '@/components/About/CinemaAdvantages.vue';
import PublicAdvantages from '@/components/About/PublicAdvantages.vue';
import RightsownerAdvantages from '@/components/About/RightsownerAdvantages.vue';
import Team from '@/components/About/Team.vue';
</script>

<template>
  <div class="about">
    <div>
      <Navbar />
      <div class="greyLine"></div>
      <AboutTitle />
      <AboutDescription />
    </div>
    <CompanyHistory />
    <div id="divider" class="greyLine"></div>
    <PublicAdvantages />
    <div id="divider" class="greyLine"></div>
    <RightsownerAdvantages />
    <div id="divider" class="greyLine"></div>
    <CinemaAdvantages />
    <!-- <div id="divider" class="greyLine"></div>
    <GraphicalCharter />-->
    <div id="divider" class="greyLine"></div>
    <Team />
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
