<script setup>
</script>

<template>
  <section class="LegalContent">
    <div id="title">
      <h1>
        Politique de confidentialité
      </h1>
      <p>
        Mise à jour le 10/03/2024
      </p>
    </div>
    <p>
      Le site web paraleclypse.com est détenu par <router-link to="/legal">Paraleclypse SAS
      </router-link>, qui est voué à récolter de vos données personnelles.
      Nous avons adopté cette politique de confidentialité, qui détermine la manière dont nous
      traitons les informations collectées par paraleclypse.com, qui fournit également les raisons
      pour lesquelles nous devons collecter certaines données personnelles vous concernant.<br><br>
      Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le site
      web paraleclypse.com.  Nous prenons soin de vos données personnelles et nous nous engageons
      à en garantir la confidentialité et la sécurité.
    </p>
    <div>
      <h2>
        Informations personnelles recueillies
      </h2>
      <p>
        Lorsque vous visitez paraleclypse.com, nous recueillons automatiquement certaines
        informations sur votre appareil, notamment des informations sur votre navigateur web,
        votre adresse IP, votre fuseau horaire et certains des cookies installés sur votre
        appareil. Nous recoltons collecter les données personnelles que vous nous fournissez
        à travers les formulaire du site web (y compris, mais sans s'y limiter, le nom, le prénom,
        l'adresse, etc.).
      </p>
    </div>
    <div>
      <h2>
        Pourquoi traitons-nous vos données ?
      </h2>
      <p>
        Notre priorité absolue est la sécurité des données utilisateurs et, à ce titre, nous
        ne traitons que des données minimales, uniquement dans la mesure où cela est
        nécessaire pour maintenir le site web et les services. Les informations collectées
        automatiquement sont utilisées uniquement pour identifier les cas potentiels d'abus
        et établir des informations statistiques concernant l'utilisation du site web. Ces
        informations statistiques ne sont pas autrement agrégées de manière à identifier un
        utilisateur particulier du système. <br><br>
        Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d'informations,
        par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et
        identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web,
        ou fournir d'autres détails en remplissant un formulaire, vous pouvez nous fournir des
        données personnelles, telles que votre e-mail, votre prénom, votre nom, votre ville de
        résidence, votre organisation, votre numéro de téléphone. Les utilisateurs qui ne savent
        pas quelles informations sont obligatoires ou qui souhaiterais se renseigner d'avantage sur
        notre politique de confidentialité sont invités à nous contacter via
        <a href="mailto:hello@paraleclypse.com">hello@paraleclypse.com</a>.
      </p>
    </div>
    <div>
      <h2>
        Vos droits en matière de données
      </h2>
      <p>
        Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données
        personnelles :<br><br>
      </p>
      <ul>
        <li>Le droit d'être informé.</li>
        <li>Le droit d'accès.</li>
        <li>Le droit de rectification.</li>
        <li>Le droit d'effacement.</li>
        <li>Le droit de restreindre le traitement.</li>
        <li>Le droit à la portabilité des données.</li>
        <li>Le droit de s'opposer au traitement.</li>
        <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
      </ul>
      <p>
        <br>
        Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnéesci-dessous.
        <br><br>
        Veuillez noter que vos informations pourraient être transférées en dehors de l'Europe, y
        compris au Canada et aux États-Unis.
      </p>
    </div>
    <div>
      <h2>
        Liens vers d'autres sites web
      </h2>
      <p>
        Notre site web peut contenir des liens externes vers d'autres sites web qui ne sont pas
        détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres
        sites web ou des pratiques de confidentialité des tiers. Nous vous encourageons à être
        attentif lorsque vous quittez notre site web et à lire les politiques de confidentialité
        de chaque site web susceptible de collecter des informations personnelles.
      </p>
    </div>
    <div>
      <h2>
        Sécurité de l'information
      </h2>
      <p>
        Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans
        un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou
        divulgation non autorisés. Toutefois, aucune transmission de données sur Internet ou sur un
        réseau sans fil ne peut être garantie.
      </p>
    </div>
    <div>
      <h2>
        Divulgation légale
      </h2>
      <p>
        Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi
        l'exige explicitement, par exemple pour nous conformer à une citation à comparaître ou à
        une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation
        est nécessaire pour protéger nos droits, votre sécurité ou celle d'autrui, enquêter sur une
        fraude ou répondre à une demande du gouvernement.
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      width: 70%;
    }
  }

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

</style>
