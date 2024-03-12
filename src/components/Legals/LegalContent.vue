<script setup>
</script>

<template>
  <section class="LegalContent">
    <div id="title" class="textBlock">
      <h1>
        Mentions Légales
      </h1>
      <p>
        Mises à jour le 10/03/2024
      </p>
    </div>
    <p>
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
      la confiance en l'économie numérique, il est précisé aux utilisateurs du
      site Paraleclypse l'identité des différents intervenants dans le cadre de
      sa réalisation et de son suivi.
    </p>
    <div class="textBlock">
      <h2>
        Edition du site
      </h2>
      <p>
        Le présent site, accessible à l’URL paraleclypse.com (le « Site »), est édité par :
        <a target="_blank" href="https://annuaire-entreprises.data.gouv.fr/entreprise/paraleclypse-985366996">
        Paraleclypse SAS</a>, société au capital de 700 euros, inscrite au R.C.S. de BORDEAUX
        sous le numéro RCS BORDEAUX B 985366996, dont le siège social est situé au 81 rue
        Camille Sauvageau, 33800 Bordeaux, représenté(e) par Tom Martin dûment habilité(e).
      </p>
    </div>
    <div class="textBlock">
      <h2>
        Hébergement
      </h2>
      <p>
        Le Site est hébergé par la société Pulseheberg, situé 9, Boulevard de Strasbourg
        83000 Toulon, (contact téléphonique : +33422141360).
      </p>
    </div>
    <div class="textBlock">
      <h2>
        Direction de publication
      </h2>
      <p>
        Le Directeur de la publication du Site est Tom Martin .
      </p>
    </div>
    <div class="textBlock">
      <h2>
        Nous contacter
      </h2>
      <p>
        Par email : <a href="mailto:hello@paraleclypse.com">hello@paraleclypse.com</a><br>
        Par courrier : 81 rue Camille Sauvageau, 33800 Bordeaux
      </p>
    </div>
    <div class="textBlock">
      <h2>
        Données personnelles
      </h2>
      <p>
        Le traitement de vos données à caractère personnel est régi par notre Charte du
        respect de la vie privée, disponible depuis la section <router-link to="/privacy">
        Politique de confidentialité</router-link>, conformément au Règlement Général sur
        la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
      </p>
    </div>
    <div class="greyLine"></div>
  </section>
</template>

<style scoped lang="scss">

section {
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 3rem;

  #title {
    text-align: center;
  }

  .textBlock {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Syne, sans-serif;
      font-size: 40px;
    }

    h2 {
      font-family: Syne, sans-serif;
      font-weight: 600;
      font-size: 30px;
    }

    a {
      color: #f06c13;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 800px) {
  section {
    width: 80%;

    #title {
      h1 {
        font-size: 28px;
        width: 100%;
      }
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
}

</style>
