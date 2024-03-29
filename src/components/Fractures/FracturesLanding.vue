<script setup>
</script>

<template>
  <div class="fracturesLanding">
    <h1>fractures</h1>
    <p>Les séances paraleclypse qui vous font découvrir les court-métrages au cinéma.</p>
  </div>
</template>

<style scoped lang="scss">

.fracturesLanding {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 75vh;
  color: white;
  padding: 4rem 3rem;

  h1 {
    font-size: 9rem;
    font-style: italic;
    font-weight: 800;
    font-family: Kanit, sans-serif, italic;
    line-height: 1;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    text-transform: uppercase;
  }
}

@media (max-width: 800px) {
  .fracturesLanding {
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}

</style>
