<script setup>
import WhiteNavbar from '@/components/WhiteNavbar.vue';
import Marquee from '@/components/Contact/Marquee.vue';
import ContactInfo from '@/components/Contact/ContactInfo.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="contact">
    <WhiteNavbar />
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
  display: flex;
  flex-direction: column;
  background-color: #0b0b0b;

  .marquee {
    height: 69vh;
  }
}

</style>
