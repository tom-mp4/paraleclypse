<template>
  <div class="home">
    <section class="top">
      <Navbar />
      <Landing />
      <div id="discover"></div>
    </section>
    <div>
      <CompanyDescription
        :content="build[0].content"/>
      <div id="project"></div>
    </div>
    <Menu />
    <CinemaMap />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Home/Landing.vue';
import CompanyDescription from '@/components/Home/CompanyDescription.vue';
import Menu from '@/components/Home/Menu.vue';
import CinemaMap from '@/components/Home/CinemaMap.vue';
import Footer from '@/components/Footer.vue';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Navbar from '@/components/Navbar.vue';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    CinemaMap,
    Menu,
    CompanyDescription,
    Landing,
  },
  data: () => ({
    build: [
      {
        content: 'Paraleclypse est un studio de distribution indépendant de films de court-métrage.'
          + ' La société distribue un catalogue de court-métrages de tous genres.'
          + ' Fiction, documentaire, animation, expérimental, films de fin d\'études,'
          + ' notre objectif est de faire vivre ces œuvres aux travers des festivals et des diffuseurs internationaux.'
          + ' Depuis 2024, Paraleclypse distribue aussi son catalogue en salle de cinéma, au travers de programmes thématique ;'
          + ' les séances Fractures.',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 30vh;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 3vh;
  background-color: #ffe6dc;
  padding-bottom: 8vh;
}

@media (max-width: 800px) {
  .home {
    gap: 15vh;
  }

  .top {
    gap: 1vh;
  }
}

</style>
