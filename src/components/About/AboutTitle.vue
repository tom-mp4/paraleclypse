<script setup>

</script>

<template>
 <section class="aboutTitle">
   <h1>
     para<br class="broker">lecl<br class="broker">ypse
   </h1>
 </section>
</template>

<style scoped lang="scss">

.aboutTitle {
  width: 100%;

  h1 {
    font-size: 7.5vw;
    text-transform: uppercase;
    color:#1f1f1f;
    font-family: Syne, sans-serif
  }

  .broker {
    display: none;
  }
}

@media (max-width: 800px) {
  .aboutTitle {
    padding: 2rem 0;

    h1 {
      font-size: 80px;
      line-height: 15vw;
      text-align: center;
    }

    .broker {
      display: block;
    }
  }
}

</style>
