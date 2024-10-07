<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="jobs">
    <Navbar />
    <div class="greyLine"></div>
    <div class="noJobs">
      <img alt="Illustration erreur 404" src="@/assets/illustrations/confrontation.svg">
      <div class="text">
        <div>
          <h1>Recrutement</h1>
          <p>Aucun poste n'est a pourvoir pour le moment.</p>
        </div>
        <router-link to="/" class="callToAction">Retourner à l'accueil</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.noJobs {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 8rem;

  img {
    width: 25%;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      font-family: Syne, sans-serif;
    }

    p {
      font-size: 1.2rem;
    }

    .callToAction {
      color: white;
      padding: 0.8rem 1.5rem;
      width: fit-content;
    }
  }
}

@media (max-width: 800px) {
  .noJobs {
    flex-direction: column;
    gap: 3rem;

    img {
      width: 50%;
    }

    .text {
      gap: 0.7rem;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}

</style>
