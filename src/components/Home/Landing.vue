<script setup>
</script>

<template>
  <header class="header">
    <nav class="navbar">
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
    </nav>
    <!--<div class="landing">
      <video autoplay muted loop class="presentingVideo">
        <source class="videoBackground" src="@/assets/video/background.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop class="verticalPresentingVideo">
        <source class="videoBackground"
                src="@/assets/video/vertical-background.mp4"
                type="video/mp4">
      </video>
    </div>-->
    <div class="landing">
      <img class="landingImage" src="@/assets/logo/logo-black.png" alt="Paraleclypse logo">
      <p class="landingDescription">
        Paraleclypse est une société de distribution et de production audiovisuelle. Nous
        travaillons des oeuvres de fiction et de documentaire.
      </p>
      <div class="callToActionButtons">
        <router-link to="/fractures" class="callToAction">découvrir</router-link>
        <a href="#project" class="callToAction" id="submitProjectButton">
          distribuer un court métrage
        </a>
      </div>
    </div>
    <div class="scrolling">
      <p>scroll</p>
      <img src="@/assets/icons/down-arrow.png" alt="Down arrow">
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

/*.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  .presentingVideo {
    width: 90%;
  }

  .verticalPresentingVideo {
    display: none;
  }
}*/

.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  gap: 3vh;

  .landingImage {
    width: 60%;
  }

  .landingDescription {
    text-align: center;
    font-family: Syne, sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
  }

  .callToActionButtons {
    display: flex;
    width: 85%;
    gap: 2%;

    #submitProjectButton {
      background-color: #1f1f1f;
      color: #f06c13;

      &:hover {
        background-color: #494949;
        color: white;
      }
    }
  }
}

.scrolling {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 12px;

  img {
    width: 50%;
  }
}

@media (max-width: 800px) {

  #right {
    display: none;
  }

  /*.presentingVideo {
    display: none;
  }

  .verticalPresentingVideo {
    display: block;
    width: 100%;
  }*/

  .landing {
    align-items: start;
    width: 70%;

    .landingImage {
      width: 80%;
    }

    .landingDescription {
      text-align: justify;
      font-size: 16px;
    }

    .callToActionButtons {
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;
    }
  }
}

</style>
