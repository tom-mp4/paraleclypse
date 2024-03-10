<template>
  <div class="home">
    <section class="top">
      <Landing />
      <PresentationVideo />
    </section>
    <CompanyDescription
      :content="build[0].content"/>
    <Menu />
    <Project />
    <CompanyDescription
      :content="build[1].content"/>
    <CinemaMap />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Home/Landing.vue';
import PresentationVideo from '@/components/Home/PresentationVideo.vue';
import CompanyDescription from '@/components/Home/CompanyDescription.vue';
import Project from '@/components/Home/Project.vue';
import Menu from '@/components/Home/Menu.vue';
import CinemaMap from '@/components/Home/CinemaMap.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    CinemaMap,
    Menu,
    Project,
    CompanyDescription,
    PresentationVideo,
    Landing,
  },
  data: () => ({
    build: [
      {
        content: 'Paraleclypse a été créé en 2020 par Tom Martin et Léo Prudhomme. Respectivement réalisateur et artiste 3D,\n'
          + 'l\'idée était d\'avoir une structure permettant de signer collectivement un premier clip vidéo. Depuis les ambitions\n'
          + 'ont évoluées et le projet a changé. Paraleclypse est devenue une société de production et de distribution axée\n'
          + 'autour de la création de fiction et particulièrement de court-métrage.',
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
  background-color: #ffe6dc;
  gap: 30vh;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 10vh;
}

</style>
