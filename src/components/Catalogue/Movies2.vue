<template>
  <div class="filmLayout">
    <nav class="filmList">
      <div
        v-for="category in categorizedFilms"
        :key="category.label"
        class="filmCategory"
      >
        <h2 class="filmCategory__label">{{ category.label }}</h2>
        <ul role="list">
          <li
            v-for="film in category.films"
            :key="film.id"
            class="filmItem"
            @mouseenter="activeFilm = film"
            @mouseleave="activeFilm = null"
          >
            <span
              class="filmTitle"
              :class="{ 'is-active': activeFilm?.id === film.id }"
            >
              {{ film.title }}
            </span>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Colonne image — fixe -->
    <div class="filmVisual" aria-hidden="true">
      <Transition name="film-fade" mode="out-in">
        <img
          v-if="activeFilm?.poster"
          :key="activeFilm.id"
          :src="activeFilm.poster"
          :alt="activeFilm.title"
          class="filmPoster"
          width="800"
          height="600"
          loading="eager"
        />
        <div v-else class="filmPosterEmpty" />
      </Transition>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// eslint-disable-next-line no-undef
defineProps({
  films: {
    type: Array,
    required: true,
    // [{ id: Number, title: String, poster: String }]
  },
});

const activeFilm = ref(null);

const CATEGORIES = [
  { key: 'festival', label: 'Films en festival' },
  { key: 'salle', label: 'Films en salle' },
];

let props;
const categorizedFilms = computed(() => CATEGORIES
  .map((cat) => ({
    label: cat.label,
    films: props.films.filter((f) => f.category === cat.key),
  }))
  .filter((cat) => cat.films.length > 0));
</script>

<style lang="scss" scoped>
// ── Variables ──────────────────────────────────────────────────────────────
$transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
$transition-fast:   180ms $transition-easing;
$transition-normal: 0ms $transition-easing;

// ── Layout principal ───────────────────────────────────────────────────────
.filmLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;
  scrollb
}

.filmList {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 2rem 2.5rem;
  scrollbar-width: thin;
  gap: 1rem;

  ul[role="list"] {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.filmItem {
  &:hover .filmTitle {
    color: var(--color-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.filmTitle {
  font-family: 'Syne', sans-serif;
  font-weight: 6s00;
  display: block;
  font-size: 3rem;
  text-transform: uppercase;
  cursor: default;
  color: var(--color-text-muted);
  transition: color $transition-fast;

  &.is-active {
    color: var(--color-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

// ── Visuel fixe ────────────────────────────────────────────────────────────
.filmVisual {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: var(--color-surface-offset);

  .filmPoster,
  .filmPosterEmpty {
    width: 100%;
    height: 100%;
  }

  .filmPoster {
    object-fit: cover;
    display: block;
  }

  .filmPosterEmpty {
    background: var(--color-surface-offset);
  }
}

// ── Transition Vue (<Transition name="film-fade">) ─────────────────────────
.film-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity $transition-normal;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
