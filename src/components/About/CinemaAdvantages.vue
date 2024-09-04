<script setup>
</script>

<template>
  <section class="cinemaAdvantages">
    <img class="illustration" src="@/assets/img/cinema-illustration.jpg" alt="Une maison grecque">
    <h2>Pour les cinémas</h2>
    <div class="cinemaDescription">
      <div>
        <h3>une solution clés en main</h3>
        <p>
          Paraleclypse offre une solution clés en main simple et efficace pour les cinémas.
          L'objectif est de proposer la même simplicité que lors de la diffusion d'un long-métrage.
          <br><br>
          Nous fournissons une sélection de courts-métrages que nous prenons le temps de découvrir.
          Nous nous occupons entièrement de la gestion des droits et de la répartition équitable des
          bénéfices entre les différents producteurs et ayants droit.
          De plus, nous comptons sur un plan de communication à grande échelle tourné vers la
          jeunesse.
        </p>
      </div>
      <a class="cinemaButton" href="">
        Rejoindre le réseau Paraleclypse
        <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.cinemaAdvantages {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .cinemaDescription {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 1.2rem;

    h3 {
      font-family: Syne, sans-serif;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: #aeaeae;
    }

    .cinemaButton {
      display: flex;
      align-items: center;
      color: black;
      font-family: Syne, sans-serif;
      text-transform: uppercase;
      gap: 0.3rem;
      font-size: 18px;

      .arrow {
        width: 3%;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .illustration {
    width: 30%;
  }
}

@media (max-width: 800px) {
  .cinemaAdvantages {
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      text-align: center;
    }

    .cinemaDescription {
      width: 100%;
      font-size: 16px;
      gap: 2rem;

      .cinemaButton {
        font-size: 14px;
        text-decoration: underline;
      }
    }

    .illustration {
      width: 85%;
    }
  }
}

</style>
