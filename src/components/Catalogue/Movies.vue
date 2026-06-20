<template>
  <div class="filmLayout">
    <nav class="filmList">
      <section
        v-for="group in groupedFilms"
        :key="group.label"
        class="filmGroup"
      >
        <h2 class="filmGroup__label">{{ group.label }}</h2>
        <ul role="list">
          <li
            v-for="film in group.films"
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
      </section>
    </nav>
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
import { ref, computed } from 'vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  films: {
    type: Array,
    required: true,
  },
});

const activeFilm = ref(null);

const GROUPS = [
  { key: 'festival', label: 'Films en festival & ventes internationales' },
  { key: 'salle', label: 'Films en salle' },
];

let groupedFilms;
// eslint-disable-next-line prefer-const
groupedFilms = computed(() => GROUPS
  .map((g) => ({
    label: g.label,
    films: props.films.filter((f) => f.category === g.key),
  }))
  .filter((g) => g.films.length > 0), // masque un groupe vide
// eslint-disable-next-line function-paren-newline
);

</script>

<style lang="scss" scoped>
// Variables
$transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
$transition-fast:   180ms $transition-easing;
$transition-normal: 200ms $transition-easing;

// Layout principal
.filmLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;

}

// Liste scrollable
.filmList {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 2rem 2.5rem;
  gap: 2rem;
  cursor: pointer;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ul[role="list"] {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

// Groupe
.filmGroup {
  & + & {
    margin-top: 2rem;       // espace entre les deux groupes
    padding-top: 2rem;
    border-top: 1px solid var(--color-divider);
  }

  &__label {
    font-size: clamp(0.625rem, 0.5vw + 0.4rem, 0.75rem);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-faint);
    margin-bottom: 0.75rem;
  }
}

// Items
.filmItem {
  padding: 0.3rem 0;

  &:hover .filmTitle {
    color: var(--color-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.filmTitle {
  font-family: 'Syne', sans-serif;
  font-weight: 500;
  font-size: 3rem;
  text-transform: uppercase;
  transition: color $transition-fast;

  &.is-active {
    color: var(--color-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

// Visuel fixe
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

// Transition Vue
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

@media (max-width: 800px) {

  .filmLayout {
    grid-template-columns: 1fr;
    height: auto;
  }

  .filmList {
    gap: 0;
  }

  .filmTitle {
    font-size: 1.3rem;
  }

  .filmVisual {
    display: none;
  }
}

</style>
