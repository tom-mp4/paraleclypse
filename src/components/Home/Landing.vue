<script setup>
</script>

<template>
  <header class="header">
    <div class="landing">
      <div class="landingLeft">
        <h1 class="landingTitle">Distribution de films de court-métrages</h1>
        <p class="landingDescription">
          Paraleclypse est une société de distribution audiovisuelle. Fiction, documentaire et
          animation pour le cinéma, les festivals et la vente.
        </p>
        <div class="callToActionButtons">
          <a target="_blank" href="https://seancesfractures.fr" class="callToAction">découvrir</a>
        </div>
      </div>
      <div class="videoBox">
        <video autoplay muted loop playsinline class="presentingVideo">
          <source src="@/assets/video/background.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

/* Header */

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5vh;

  .landing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80vh;
    gap: 3vh;

    .landingLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 45%;
      height: 80vh;
      gap: 2vh;

      .landingTitle {
        font-family: Syne, sans-serif;
        font-size: 40px;
        font-weight: 800;
        line-height: 40px;
        text-transform: uppercase;
      }

      .landingDescription {
        font-family: Syne, sans-serif;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }

      .callToActionButtons {
        display: flex;
        flex-direction: column;
        gap: 0.5vh;
        font-size: 14px;
        width: 60%;
      }
    }

    .videoBox {
      width: 40vw;
      height: 100%;
      overflow: hidden;

      .presentingVideo {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
}

@media (max-width: 800px) {
  .header {
    .landing {
      flex-direction: column;
      gap: 5vh;

      .landingLeft {
        width: 100%;
        gap: 2vh;

        .landingTitle {
          font-size: 32px;
          line-height: 30px;
        }

        .landingDescription {
          font-size: 14px;
          line-height: 18px;
        }

        .callToActionButtons {
          width: 100%;
        }
      }

      .videoBox {
        width: 100%;
      }
    }
  }
}
</style>
