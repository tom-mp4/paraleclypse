<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footerTop">
      <div class="footerColumn">
        <img src="@/assets/logo/logo-white.png" alt="White paraleclypse logo">
        <p>
          Paraleclypse Distribution est membre d'UniFrance.
        </p>
        <div class="socials">
          <a href="https://instagram.com/paraleclypse" target="_blank">
            instagram
          </a>
          <a href="https://linkedin.com/paraleclypse" target="_blank">
            linkedin
          </a>
        </div>
      </div>
      <div class="footerMenu">
        <h3>Ressources</h3>
        <div>
          <a target="_blank" href="https://seancesfractures.fr">Séances Fractures</a>
          <!--<a href="https://blog.paraleclypse.com" target="_blank">Blog & Questions Fréquentes</a>
          <a href="https://form.typeform.com/to/wCXaFMTe">Signalement</a>-->
          <router-link to="/movies">Catalogue</router-link>
          <router-link to="/about">Informations & Entreprise</router-link>
          <a target="_blank"
             href="https://fr.indeed.com/viewjob?jk=dbf71c2fbd657975&from=shareddesktop_copy">
            Recrutements
          </a>
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
        © Paraleclypse SAS - Tous droits réservés - 2025
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
  background-color: #0b0b0b;

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

      .socials {
        display: flex;
        gap: 1rem;
        text-transform: uppercase;
        padding-top: 1rem;

        a {
          color: white;

          &:hover {
            color: #f06c13;
            text-decoration: underline;
          }
        }
      }

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

@media (max-width: 800px) {
  .footer {
    .footerTop {
      flex-direction: column;
      gap: 3rem;
      width: 70%;

      .footerColumn {
        width: 100%;
        align-items: center;
        text-align: center;

        img {
          width: 165px;
        }

        p {
          line-height: 20px;
        }
      }

      .footerMenu {
        width: fit-content;
      }
    }

    .footerBottom {
      width: 70%;
      text-align: center;

      #footerToTopButton {
        display: none;
      }
    }
  }
}

</style>
