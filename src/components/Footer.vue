<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footerTop">
      <div class="footerColumn">
        <img src="@/assets/logo/logo-white.png" alt="White paraleclypse logo">
        <p>
          Redécouvrez le cinéma, réinventez votre expérience.
        </p>
        <!--<div class="socials">
          <a href="https://instagram.com/paraleclypse" target="_blank">
            <img src="@/assets/icons/instagram.png" alt="Instagram logo">
          </a>
          <a href="https://linkedin.com/paraleclypse" target="_blank">
            <img src="@/assets/icons/linkedin.png" alt="Linkedin logo">
          </a>
        </div>-->
      </div>
      <div class="footerMenu">
        <h3>Ressources</h3>
        <div>
          <a href="#">Blog & Questions Fréquentes</a>
          <a href="#">Signalement</a>
          <a href="#">Informations & Entreprise</a>
          <a href="#">Recrutements</a>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="footerMenu">
        <h3>Politiques</h3>
        <div>
          <router-link to="/privacy">Politique de confidentialité</router-link>
          <router-link to="/legal">Mentions légales</router-link>
          <router-link to="/contract">Contrats et Engagements</router-link>
        </div>
      </div>
    </div>
    <div id="footerLine" class="line"></div>
    <div class="footerBottom">
      <p>
        © Paraleclypse.com - Tous droits réservés - 2024
      </p>
      <a id="footerToTopButton"
         href="#">
        Retourner en haut
        <img src="@/assets/icons/up-arrow.png" alt="Up arrow">
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1f1f1f;

  .footerTop {
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding: 5rem 0;
    height: fit-content;

    .footerColumn {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 33%;

      img {
        width: 180px;
      }

      p {
        line-height: 25px;
        font-size: 14px;
        color: white;
      }
    }

    .footerMenu {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 20%;

      h3 {
        color: white;
        font-size: 20px;
        font-family: Syne, sans-serif;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      a {
        color: white;
        font-size: 16px;
        transition: all ease 0.1s;

        &:hover {
          color: #bebebe;
        }
      }
    }
  }

  #footerLine {
    border-bottom-color: #f06c13;
  }

  .footerBottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    padding: 3rem 0;

    p {
      color: white;
    }

    #footerToTopButton {
      position: relative;
      color: white;
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      transition: .3s;

      &:hover {
        transform: translateY(-10px);
        text-shadow: white 2px 0 15px;
      }

      img {
        width: 8%;
      }
    }
  }
}

</style>
