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
    <CompanyDescription
      :content="build[1].content"/>
    <Project />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Home/Landing.vue';
import CompanyDescription from '@/components/Home/CompanyDescription.vue';
import Project from '@/components/Home/Project.vue';
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
    Project,
    CompanyDescription,
    Landing,
  },
  data: () => ({
    build: [
      {
        content: 'Paraleclypse est un studio de distribution indépendant dédié au court-métrage.'
          + ' Notre volonté est de connecter un cinéma jeune et émergent avec un public curieux et habitué aux formats courts.'
          + ' Nous proposons ainsi des séances de 75 à 90 minutes, composées de plusieurs courts-métrages enchaînés,'
          + ' créant une expérience cinématographique riche et variée.',
      },
      {
        content: 'Notre objectif est d\'accompagner les artistes pour lesquels nous\n'
          + 'croyons dans le développement de leur projet. De l\'expertise technique et artistique, en passant par l\'évaluation\n'
          + 'des coûts, la production et la diffusion, nous travaillons collectivement pour donner vie à de beaux projets.\n'
          + 'Avant tout, nous souhaitons raconter une histoire, transmettre une émotion, et faire vivre une expérience.',
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
