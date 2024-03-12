<script setup>
</script>

<template>
  <section class="projects">
    <div class="projectDecoration">
      <p>
        paraleclypse production
      </p>
      <div class="line">
      </div>
      <p>
        2022 - 2023
      </p>
    </div>
    <div class="projectInfos">
      <div class="projectTextPart">
        <h2 class="projectTitle">paradoxa</h2>
        <p class="projectDescription">
          Paradoxa est un court-métrage "road movie",  réalisé par Tom Martin et produit par
          Paraleclypse avec Ennio Berneau et Ghjulia Van Muylders.
        </p>
      </div>
      <a id="projectButton"
         target="_blank"
         href="https://www.imdb.com/title/tt28446354/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_paradoxa"
         class="callToAction">
        découvrir paradoxa
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.projects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url('../../assets/img/paradoxa-background.jpg');
  background-size: cover;
  border-radius: 25px;
  padding: 4rem 0;
  width: 90%;
  height: 80vh;

  .projectDecoration {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      color: white;
      text-transform: uppercase;
      font-family: Syne, sans-serif;
    }
  }

  .projectInfos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    gap: 1rem;

    .projectTextPart {
      gap: 1rem;
      width: 45%;

      .projectTitle {
        font-family: Syne, sans-serif;
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 700;
        color: white;
      }

      .projectDescription {
        color: white;
        font-size: 18px;
      }
    }

    #projectButton {
      width: 20%;
    }
  }
}

@media (max-width: 800px) {
  .projects {
    padding: 2rem 0;
    border-radius: 20px;
    width: 90%;
    height: 70vh;

    .projectDecoration {
      flex-direction: column;
      gap: 0.3rem;

      p {
        font-size: 14px;
      }

      .line {
        border-bottom: 1px solid white;
        width: 30vw;
      }
    }

    .projectInfos {
      flex-direction: column;
      width: 90%;
      gap: 1.2rem;

      .projectTextPart {
        gap: 0.5rem;
        width: 100%;
        text-align: center;

        .projectTitle {
          font-size: 24px;
        }

        .projectDescription {
          font-size: 14px;
        }
      }

      #projectButton {
        width: fit-content;
        color: white;
      }
    }
  }
}

</style>
