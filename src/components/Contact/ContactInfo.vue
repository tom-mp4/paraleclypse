<script setup>
</script>

<template>
  <section class="contactInfo">
    <div class="contactInfoColumn">
      <h2>Adresse</h2>
      <div>
        <p>81 rue Camille Sauvageau</p>
        <p>33800, Bordeaux</p>
      </div>
    </div>
    <div class="contactInfoColumn">
      <h2>General</h2>
      <a href="mailto:hello@paraleclypse.com">hello@paraleclypse.com</a>
    </div>
    <div class="contactInfoColumn">
      <h2>Distribution</h2>
      <a href="mailto:distribution@paraleclypse.com">distribution@paraleclypse.com</a>
    </div>
    <div class="contactInfoColumn">
      <h2>Production</h2>
      <a href="mailto:production@paraleclypse.com">production@paraleclypse.com</a>
    </div>
  </section>
</template>

<style scoped lang="scss">

.contactInfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  color: white;

  .contactInfoColumn {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-size: 20px;
      font-weight: 500;
      font-family: 'Syne', sans-serif;
      text-transform: uppercase;
      color: #f06c13;
    }

    a {
      color: white;
      font-size: 16px;
      font-family: 'Nunito', sans-serif;
    }
  }
}

</style>
