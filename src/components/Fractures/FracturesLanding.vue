<script setup>
</script>

<template>
  <div class="fracturesLanding">
    <h1>frActUreS</h1>
  </div>
</template>

<style scoped lang="scss">

.fracturesLanding {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  color: red;
  padding: 4rem 3rem;

  h1 {
    font-size: 15rem;
    font-family: Dirtyline, sans-serif;
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
