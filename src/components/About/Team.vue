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
          Président - Responsable de programmation
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/img/cinema.jpg" class="teamImg" alt="Photo des membres de l'équipe">
    </div>
    <div class="teamMember">
      <div class="teamInfos">
        <h3 class="teamName">
          Clément Mix
        </h3>
        <p class="teamRole">
          Responsable du développement exploitation
        </p>
      </div>
      <div class="line"></div>
      <img src="@/assets/img/cinema.jpg" class="teamImg" alt="Photo des membres de l'équipe">
    </div>
    <div class="teamMember">
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
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">

.team{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .title {
    font-family: Syne, sans-serif;
  }

  .teamContainer {
    display: flex;
    flex-direction: column;
    width: 80vw;
    gap: 25px;

    .teamMember {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      .teamInfos {
        min-width: fit-content;
      }

      .teamImg {
        width: 5%;
        border-radius: 9999px;
      }

      .line {
        height: 1px;
        width: 100%;
        background-color: #aeaeae;
      }
    }
  }
}

</style>
