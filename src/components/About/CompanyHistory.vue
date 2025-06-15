<script setup>

</script>

<template>
  <section class="companyHistory">
    <p>
      Paraleclypse naît en 2020 de la collaboration entre Tom Martin et Léo Prudhomme,
      respectivement réalisateur et artiste 3D. L'idée était de créer une structure permettant
      de développer des projets artistiques dans le sud-ouest de la France.
    </p>
    <p>
      Depuis, les ambitions ont évolué et le projet a changé. En 2024, Paraleclypse est
      devenue une société de distribution avec la solide conviction de rendre accessibles
      les films de court-métrage au grand public.
    </p>
    <p>
      Aujourd'hui, Paraleclypse, à travers les séances Fractures, propose de diffuser le
      court-métrage dans les cinémas. Mais la société s'inscrit aussi dans une démarche plus
      conventionnelle, à travers ses activités de distribution pour les festivals et les
      ventes internationales.
    </p>
  </section>
</template>

<style scoped lang="scss">

.companyHistory {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  width: 100%;

  p {
    width: 35%;
    font-size: 1.2em;
  }
}

@media (max-width: 800px) {
  .companyHistory {
    p {
      width: 80%;
      font-size: 16px;
    }
  }
}

</style>
