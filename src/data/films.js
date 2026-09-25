// src/data/films.js
export const films = [
  {
    id: 'le-bandit-et-la-couturiere',
    title: 'le-bandit-et-la-couturiere',
    category: 'festival',
    poster: '/posters/letrangere.jpg',
    stills: [
      '/stills/letrangere-1.jpg',
      '/stills/letrangere-2.jpg',
    ],
    director: 'Prénom Nom',
    year: 2024,
    duration: '82 min',
    genre: 'Drame',
    synopsis: 'Lorem ipsum...',
    cast: ['Acteur A', 'Actrice B'],
    production: 'Société de production',
    festivals: ['Cannes 2024 — Sélection officielle', 'San Sebastián 2024'],
    distribution: ' Films',
  },
];

export function getFilmById(id) {
  return films.find((f) => f.id === id) ?? null;
}
