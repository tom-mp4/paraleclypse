<script setup>

</script>

<template>
  <section class="graphicalCharter">
    <h2>Chartre Graphique</h2>
    <div class="graphicalCharterDescription">
      <div>
        <h3>une identité</h3>
        <p>
          La charte graphique de Paraleclypse est un élément essentiel de notre identité visuelle.
          Elle est utilisés pour représenter notre entreprise sur tous les supports de
          communication.
        </p>
      </div>
      <a class="graphicalCharterButton" href="">
        Chartre graphique et logos
        <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
      </a>
    </div>
    <img class="blackLogo" src="@/assets/logo/logo-profil-noir.svg" alt="Logo paraleclypse noir">
  </section>
</template>

<style scoped lang="scss">

  .graphicalCharter {
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;

    h2 {
      font-family: Syne, sans-serif;
    }

    .graphicalCharterDescription {
      display: flex;
      flex-direction: column;
      width: 30%;
      text-align: justify;
      gap: 1.2rem;

      h3 {
        font-family: Syne, sans-serif;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 500;
        color: #aeaeae;
      }

      .graphicalCharterButton {
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

    .blackLogo {
      width: 7%;
    }
  }

</style>
