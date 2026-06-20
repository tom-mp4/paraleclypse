<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Catalogue from '@/components/Catalogue/Movies.vue';
import Movies from '@/components/Catalogue/Movies2.vue';

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
      { id: 4, title: 'DIALOGUES SOLITAIRES',       poster: ds },
      { id: 5, title: '19 RUE PORTEFOIN',           poster: rpf },
      { id: 6, title: 'SUMMER ET ZIMA',             poster: smz },
      { id: 7, title: 'QUAND LA NUIT',              poster: qln },
      { id: 8, title: 'SOLASTALGIE',                poster: slt },
      { id: 9, title: 'ALL THIS DEATH',             poster: atd },
      { id: 10, title: 'HARMONIE',                  poster: har },
      { id: 11, title: 'GÉNÉRIQUE DE FIN',          poster: gdf },
      { id: 12, title: 'LA FLEUR AU FUSIL',         poster: lfaf },
      { id: 13, title: 'LES BELLES CICATRICES',      poster: 'src/assets/posters/lbc.jpg' },
      { id: 14, title: 'A DAY IN A LIFE',            poster: 'src/assets/posters/lbc.jpg' },
      { id: 15, title: 'UNE HISTOIRE DE RÈGLES',     poster: 'src/assets/posters/lbc.jpg' },
      { id: 16, title: 'MAURICE\'S BAR',             poster: 'src/assets/posters/lbc.jpg' },
      { id: 17, title: 'À MARÉE HAUTE',              poster: 'src/assets/posters/lbc.jpg' },
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
