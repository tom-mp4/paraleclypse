<template>
  <div class="home">
    <section class="top">
      <WhiteNavbar id="nav" />
      <VideoLanding />
      <ScrollInvitation id="scroll" />
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
import CompanyDescription from '@/components/Home/CompanyDescription.vue';
import Menu from '@/components/Home/Menu.vue';
import CinemaMap from '@/components/Home/CinemaMap.vue';
import Footer from '@/components/Footer.vue';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import VideoLanding from '@/components/Home/VideoLanding.vue';
import WhiteNavbar from '@/components/WhiteNavbar.vue';
import ScrollInvitation from '@/components/Home/ScrollInvitation.vue';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  name: 'Home',
  components: {
    ScrollInvitation,
    WhiteNavbar,
    VideoLanding,
    Footer,
    CinemaMap,
    Menu,
    CompanyDescription,
  },
  data: () => ({
    build: [
      {
        content: 'Paraleclypse est un studio de distribution indépendant de films de court-métrage.'
          + ' La société distribue un catalogue de court-métrages de tous genres.'
          + ' Fiction, documentaire, animation, expérimental, films de fin d\'études,'
          + ' notre objectif est de faire vivre ces œuvres aux travers des festivals et des diffuseurs internationaux.'
          + ' Depuis 2024, Paraleclypse distribue aussi son catalogue en salle de cinéma, au travers de programmes thématiques ;'
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
  align-items: center;
  width: 100%;

  #nav {
    z-index: 2;
    position: absolute;
    width: 90vw;
  }

  #scroll {
    z-index: 2;
    position: absolute;
    top: 90vh;
  }
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
