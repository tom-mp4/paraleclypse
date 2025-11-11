<script setup>
</script>

<template>
<section class="team">
  <h2 class="title">
    L'équipe
  </h2>
  <div class="teamContainer">
    <div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Tom Martin
        </h3>
        <p class="teamRole">
          Président - Programmation & ventes internationales
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/team/tmartin1.png" class="teamImg" alt="Photo de Tom Martin">
    </div>
    <!--<div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Victoire Vallois
        </h3>
        <p class="teamRole">
          Responsable de développement - Exploitation
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/team/vvallois.png"
           class="teamImg"
           alt="Photo des membres de l'équipe">
    </div>-->
    <div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Diane Schilling
        </h3>
        <p class="teamRole">
          Chargée des festivals et relations publiques
        </p>
      </div>
      <div class="line"></div>
      <!--
      <img src="@/assets/team/wtesoriere.png" class="teamImg" alt="Photo de William Tésorière">-->
    </div>
    <div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          William Tésorière
        </h3>
        <p class="teamRole">
          Assistant de programmation
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/team/wtesoriere.png" class="teamImg" alt="Photo de William Tésorière">
    </div>
    <div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Yassir Moustakim
        </h3>
        <p class="teamRole">
          Comptabilité et gestion
        </p>
      </div>
      <div class="line"></div>
      <!--
      <img src="@/assets/team/wtesoriere.png" class="teamImg" alt="Photo de William Tésorière">-->
    </div>
    <!--<div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Clément Mix
        </h3>
        <p class="teamRole">
          Responsable de développement
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/team/cmix.jpeg" class="teamImg" alt="Photo de Clément Mix">
    </div>-->
    <!--<div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Gaspard Inchauspé
        </h3>
        <p class="teamRole">
          Directeur Financier
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/img/cinema.jpg" class="teamImg" alt="Photo des membres de l'équipe">
    </div>-->
  </div>
</section>
</template>

<style scoped lang="scss">

.team {
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;

  .title {
    font-family: Syne, sans-serif;
  }

  .teamContainer {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 25px;

    .teamMember {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      .teamInfos {
        min-width: fit-content;
      }

      .line {
        height: 1px;
        width: 100%;
        background-color: #aeaeae;
      }

      .teamImg {
        height: 7vh;
        border-radius: 9999px;
      }
    }
  }
}

@media (max-width: 800px) {
  .team {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 0;

    .teamContainer {
      width: 80%;

      .line {
        display: none;
      }

      .teamImg {
        display: none;
      }
    }
  }
}

</style>
