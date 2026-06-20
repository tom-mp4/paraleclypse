<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Movies from '@/components/Catalogue/Movies.vue';

import lbelc from '@/assets/stills/lbelc.jpg';
import grn from '@/assets/stills/grn.jpg';
import lsep from '@/assets/stills/lsep.jpg';
import ds from '@/assets/stills/ds.jpg';
import rpf from '@/assets/stills/rpf.jpg';
import atd from '@/assets/stills/atd.jpg';
import har from '@/assets/stills/har.jpeg';
import gdf from '@/assets/stills/gdf.jpg';
import lfaf from '@/assets/stills/lfaf.jpg';
import slt from '@/assets/stills/slt.jpg';
import qln from '@/assets/stills/qln.jpg';
import smz from '@/assets/stills/smz.png';
import amh from '@/assets/stills/amh.jpg';
import lbc from '@/assets/stills/lbc.jpg';
import uhdr from '@/assets/stills/app.jpg';
import adial from '@/assets/stills/adial.jpg';
import maur from '@/assets/stills/maur.jpg';

</script>

<template>
  <div class="catalogue">
    <div>
      <Navbar />
      <div class="greyLine"></div>
    </div>
    <Movies :films="[
      { id: 1, title: 'LE BANDIT ET LA COUTURIÈRE', category: 'festival', poster: lbelc },
      { id: 2, title: 'GRANIER',                    category: 'festival', poster: grn },
      { id: 3, title: 'LE SOLEIL EST PARTI',        category: 'festival', poster: lsep },
      { id: 4, title: 'DIALOGUES SOLITAIRES',       category: 'festival', poster: ds },
      { id: 5, title: '19 RUE PORTEFOIN',           category: 'festival', poster: rpf },
      { id: 6, title: 'SUMMER ET ZIMA',             category: 'festival', poster: smz },
      { id: 7, title: 'QUAND LA NUIT',              category: 'festival', poster: qln },
      { id: 8, title: 'SOLASTALGIE',                category: 'festival', poster: slt },
      { id: 9, title: 'ALL THIS DEATH',             category: 'festival', poster: atd },
      { id: 10, title: 'HARMONIE',                  category: 'festival', poster: har },
      { id: 11, title: 'GÉNÉRIQUE DE FIN',          category: 'festival', poster: gdf },
      { id: 12, title: 'LA FLEUR AU FUSIL',         category: 'festival', poster: lfaf },
      { id: 13, title: 'LES BELLES CICATRICES',     category: 'salle',    poster: lbc },
      { id: 14, title: 'A DAY IN A LIFE',           category: 'salle',    poster: adial },
      { id: 15, title: 'UNE HISTOIRE DE RÈGLES',    category: 'salle',    poster: uhdr },
      { id: 16, title: 'MAURICE\'S BAR',            category: 'salle',    poster: maur },
      { id: 17, title: 'À MARÉE HAUTE',             category: 'salle',    poster: amh },
      ]" />
    <Footer />
  </div>
</template>

<style scoped lang="scss">

.catalogue {
  display: flex;
  flex-direction: column;
}

</style>
