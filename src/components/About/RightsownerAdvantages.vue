<script setup>
</script>

<template>
  <section class="roAdvantages">
    <h2>Pour les cinéastes</h2>
    <img class="illustration" src="@/assets/img/creators-illustration.jpg" alt="un chemin">
    <div class="roDescription">
      <div>
        <h3>diffusez vos œuvres</h3>
        <p>
          Pour les réalisateurs, producteurs et ayants droits,
          Paraleclypse représente une nouvelle opportunité de
          diffusion pour leurs œuvres.<br><br>
          Au-delà des festivals, les séances Fractures offrent une
          visibilité auprès d’un large public, une interaction avec
          la critique.<br><br>
          De plus, Paraleclypse garantit une rémunération
          stable et équitable, soutenant ainsi financièrement de
          nouveaux projets.
        </p>
      </div>
      <a class="roButton" target="_blank" href="https://form.typeform.com/to/iDYvb5en">
        Proposer mon film
        <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.roAdvantages {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .roDescription {
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

    .roButton {
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
  .roAdvantages {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 0 2rem;

    h2 {
      text-align: center;
    }

    .roDescription {
      width: 100%;
      font-size: 16px;
      gap: 2rem;

      .roButton {
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
