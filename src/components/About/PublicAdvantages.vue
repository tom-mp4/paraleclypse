<script setup>
</script>

<template>
  <section class="publicAdvantages">
    <h2>Pour le public</h2>
    <div class="publicDescription">
      <div>
        <h3>redécouvrir le cinéma</h3>
        <p>
          Les séances Fractures attirent un public réceptif à l’innovation,
          Paraleclypse offre un regard frais sur le paysage cinématographique
          contemporain, en mettant en lumière des artistes et
          des contenus hors des sentiers battus.<br><br>
          Pour ceux qui hésitent entre plusieurs films, la
          curiosité suscitée par les courts-métrages de fiction,
          documentaires et animations peut être un moteur pour
          choisir cette expérience différente.
        </p>
      </div>
      <!--<a class="graphicalCharterButton" href="">
        Rejoindre le réseau Paraleclypse
        <img class="arrow" src="@/assets/icons/up-right-arrow.png" alt="Fleche haut droite">
      </a>-->
    </div>
    <img class="illustration" src="@/assets/img/public-illustration.jpg" alt="deux chaises">
  </section>
</template>

<style scoped lang="scss">

.publicAdvantages {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  h2 {
    font-family: Syne, sans-serif;
  }

  .publicDescription {
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

  .illustration {
    width: 30%;
  }
}

@media (max-width: 800px) {
  .publicAdvantages {
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      text-align: center;
    }

    .publicDescription {
      width: 100%;
      font-size: 16px;
      gap: 2rem;

      .graphicalCharterButton {
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
