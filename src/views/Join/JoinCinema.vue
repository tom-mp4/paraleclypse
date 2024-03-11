<script setup>
import WhiteNavbar from '@/components/WhiteNavbar.vue';
import Footer from '@/components/Footer.vue';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

createWidget('Z5kDnh8W', { container: document.querySelector('#form') });
</script>

<template>
<div>
  <WhiteNavbar />
  <section id="form" class="presentation">
  </section>
  <Footer />
</div>
</template>

<style scoped lang="scss">

</style>
