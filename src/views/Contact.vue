<script setup>
import Footer from '@/components/Footer.vue';
import Marquee from '@/components/Contact/Marquee.vue';
import ContactInfo from '@/components/Contact/ContactInfo.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="contact">
    <Navbar />
    <div class="greyLine"></div>
    <Marquee class="marquee" />
    <div class="greyLine"></div>
    <ContactInfo />
    <div class="greyLine"></div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.contact {
  background-color: #1f1f1f;

  .marquee {
    height: 69vh;
  }
}

</style>
