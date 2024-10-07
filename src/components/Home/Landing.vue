<script setup>
</script>

<template>
  <header class="header">
   <!--<nav class="navbar">
      <img class="navbarLogo" src="@/assets/logo/logo-black.png" alt="Logo noir Paraleclypse">
      <div id="left" class="navMenu">
        <router-link to="/fractures" class="navButton">fractures</router-link>
        <router-link to="/about" class="navButton">à propos</router-link>
        <router-link to="/contact" class="navButton">contact</router-link>
      </div>
      <div id="right" class="navMenu">
        <a href="https://instagram.com/paraleclypse" target="_blank" class="navButton">instagram</a>
        <p>/</p>
        <a href="https://www.linkedin.com/company/paraleclypse/" target="_blank" class="navButton">linkedin</a>
      </div>
    </nav>-->

    <div class="landing">
      <div class="landingLeft">
        <h1 class="landingTitle">Découvrez le court-métrage au cinéma</h1>
        <p class="landingDescription">
          Paraleclypse est une société de distribution et de production audiovisuelle. Nous
          travaillons des oeuvres de fiction et de documentaire.
        </p>
        <div class="callToActionButtons">
          <router-link to="/fractures" class="callToAction">découvrir</router-link>
        </div>
      </div>
      <div class="videoBox">
        <video autoplay muted loop class="presentingVideo">
          <source class="videoBackground" src="@/assets/video/background.mp4" type="video/mp4">
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

  /* Navbar */

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    width: 90%;

    .navbarLogo {
      width: 12%;
    }

    .navMenu {
      display: flex;
      text-transform: uppercase;
      gap: 2rem;

      a {
        color: #1f1f1f;

        &:hover {
          color: #f06c13;
        }
      }
    }

    #right {
      text-align: end;
    }
  }
}

/* Landing */

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

</style>
