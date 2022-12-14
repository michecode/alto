import { writable } from 'svelte/store';

export const filters = writable({
  classification: {
    palms: false,
    succulents: false,
    cacti: false,
    calathea: false,
    trees: false,
    orchids: false,
  },
  difficulty: 'All',
  light: {
    low: false,
    indirect: false,
    direct: false,
  },
  water: {
    dry: false,
    balanced: false,
    wet: false,
  },
  toxic: {
    petFriendly: false,
  },
});
