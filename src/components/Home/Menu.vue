<script setup>
</script>

<template>
  <section class="menu">
    <div class="menuLine"></div>
    <a href="https://form.typeform.com/to/iDYvb5en" target="_blank" class="menuButton">
      Diffuser votre projet
      <img src="@/assets/icons/down-arrow.png" alt="Right arrow" class="menuImg">
    </a>
    <div class="menuLine"></div>
    <a href="https://form.typeform.com/to/Z5kDnh8W" target="_blank" class="menuButton">
      Rejoindre les cinémas partenaires
      <img src="@/assets/icons/down-arrow.png" alt="Right arrow" class="menuImg">
    </a>
    <div class="menuLine"></div>
    <router-link to="/contact" class="menuButton">
      Nous contacter
      <img src="@/assets/icons/down-arrow.png" alt="Right arrow" class="menuImg">
    </router-link>
    <div class="menuLine"></div>
  </section>
</template>

<style scoped lang="scss">

.menu {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;

  .menuLine {
    border-bottom: solid 1px #1f1f1f;
    width: 100%;
  }

  .menuButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
    width: 100%;
    color: #1f1f1f;
    font-family: Syne, sans-serif;
    font-size: 36px;
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
      transform: translateX(15px);
    }
  }

  .menuImg {
    rotate: -90deg;
    width: 3rem;
  }
}

</style>
