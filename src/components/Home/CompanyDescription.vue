<script>
export default {
  props: {
    content: String,
  },
};

</script>

<template>
  <section class="companyDescription">
    <p>
      {{content}}
    </p>
  </section>
</template>

<style scoped lang="scss">

.companyDescription {
  display: flex;
  justify-content: center;

  p {
    text-align: left;
    // text-transform: uppercase;
    font-family: Syne, sans-serif;
    font-size: 32px;
    width: 70%;
    line-height: 40px;
  }
}

@media (max-width: 800px) {
  .companyDescription {
    p {
      font-size: 18px;
      width: 75%;
      line-height: 26px;
    }
  }
}

</style>
