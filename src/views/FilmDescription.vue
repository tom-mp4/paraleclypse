<template>
  <div v-if="film" class="film-page">

    <!-- Hero — photo plein écran -->
    <section class="film-hero">
      <img
        :src="film.poster"
        :alt="film.title"
        class="film-hero__img"
        width="1600"
        height="900"
        loading="eager"
      />
      <div class="film-hero__overlay">
        <RouterLink :to="{ name: 'home' }" class="film-hero__back" aria-label="Retour">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Retour
        </RouterLink>
        <h1 class="film-hero__title">{{ film.title }}</h1>
      </div>
    </section>

    <!-- Corps -->
    <div class="film-body">

      <!-- Colonne principale -->
      <main class="film-main">

        <!-- Méta compact -->
        <ul class="film-meta" role="list">
          <li v-if="film.director">
            <span class="film-meta__key">Réalisation</span>
            <span class="film-meta__val">{{ film.director }}</span>
          </li>
          <li v-if="film.year">
            <span class="film-meta__key">Année</span>
            <span class="film-meta__val">{{ film.year }}</span>
          </li>
          <li v-if="film.duration">
            <span class="film-meta__key">Durée</span>
            <span class="film-meta__val">{{ film.duration }}</span>
          </li>
          <li v-if="film.genre">
            <span class="film-meta__key">Genre</span>
            <span class="film-meta__val">{{ film.genre }}</span>
          </li>
          <li v-if="film.production">
            <span class="film-meta__key">Production</span>
            <span class="film-meta__val">{{ film.production }}</span>
          </li>
          <li v-if="film.distribution">
            <span class="film-meta__key">Distribution</span>
            <span class="film-meta__val">{{ film.distribution }}</span>
          </li>
        </ul>

        <!-- Synopsis -->
        <section v-if="film.synopsis" class="film-section">
          <h2 class="film-section__title">Synopsis</h2>
          <p class="film-section__text">{{ film.synopsis }}</p>
        </section>

        <!-- Casting -->
        <section v-if="film.cast?.length" class="film-section">
          <h2 class="film-section__title">Avec</h2>
          <ul class="film-tags" role="list">
            <li v-for="person in film.cast" :key="person" class="film-tags__item">
              {{ person }}
            </li>
          </ul>
        </section>

      </main>

      <!-- Colonne latérale -->
      <aside class="film-aside">

        <!-- Festivals -->
        <section v-if="film.festivals?.length" class="film-section">
          <h2 class="film-section__title">Sélections festival</h2>
          <ul class="film-list-plain" role="list">
            <li v-for="festival in film.festivals" :key="festival">
              {{ festival }}
            </li>
          </ul>
        </section>

        <!-- Diffusion -->
        <section v-if="film.distribution" class="film-section">
          <h2 class="film-section__title">Diffusion</h2>
          <p class="film-section__text">{{ film.distribution }}</p>
        </section>

      </aside>

    </div>

    <!-- Galerie de photos -->
    <section v-if="film.stills?.length" class="film-gallery">
      <img
        v-for="(still, i) in film.stills"
        :key="i"
        :src="still"
        :alt="`${film.title} — photo ${i + 1}`"
        class="film-gallery__img"
        width="800"
        height="500"
        loading="lazy"
      />
    </section>

  </div>

  <!-- Film introuvable -->
  <div v-else class="film-not-found">
    <p>Film introuvable.</p>
    <RouterLink :to="{ name: 'Catalogue' }">Retour à la liste</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getFilmById } from '@/data/films';

const route = useRoute();
const film = computed(() => getFilmById(route.params.id));
</script>

<style lang="scss" scoped>
$transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
$transition-fast:   180ms $transition-easing;

// ── Hero ───────────────────────────────────────────────────────────────────
.film-hero {
  position: relative;
  height: 75vh;
  overflow: hidden;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem;
  }

  &__back {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: color $transition-fast, gap $transition-fast;

    &:hover {
      color: #fff;
      gap: 0.75rem;
    }
  }

  &__title {
    font-size: clamp(2rem, 5vw + 1rem, 5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #fff;
    line-height: 1.05;
    max-width: 14ch;
  }
}

// ── Corps ──────────────────────────────────────────────────────────────────
.film-body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

// ── Méta ───────────────────────────────────────────────────────────────────
.film-meta {
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 2.5rem;
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 2rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.5rem 0;
  }

  &__key {
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-faint);
  }

  &__val {
    font-size: 0.9375rem;
    color: var(--color-text);
  }
}

// ── Sections ───────────────────────────────────────────────────────────────
.film-section {
  margin-bottom: 2rem;

  &__title {
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-faint);
    margin-bottom: 0.75rem;
  }

  &__text {
    font-size: clamp(0.9375rem, 1vw + 0.5rem, 1.0625rem);
    line-height: 1.7;
    color: var(--color-text-muted);
    max-width: 64ch;
  }
}

// ── Tags casting ───────────────────────────────────────────────────────────
.film-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  &__item {
    font-size: 0.8125rem;
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
  }
}

// ── Liste laterale ─────────────────────────────────────────────────────────
.film-list-plain {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  li {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    line-height: 1.5;
  }
}

// ── Galerie ────────────────────────────────────────────────────────────────
.film-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  gap: 2px;

  &__img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
  }
}

// ── Not found ──────────────────────────────────────────────────────────────
.film-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 1rem;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}
</style>
