import create from 'zustand';
import { removeDuplicatesFrom } from '../../utils';

type FiltersStore = {
  filters: string[];
  priceRange: string;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  setPriceRange: (range: string) => void;
  resetFilters: VoidFunction;
};

const useFiltersStore = create<FiltersStore>(set => ({
  filters: [],
  priceRange: '',
  addFilter: filter =>
    set(state => ({
      ...state,
      filters: removeDuplicatesFrom(state.filters.concat(filter))
    })),
  removeFilter: filter =>
    set(state => ({ ...state, filters: state.filters.filter(f => f !== filter) })),
  setPriceRange: range => set(state => ({ ...state, priceRange: range })),
  resetFilters: () => set(state => ({ ...state, filters: [], priceRange: '' }))
}));

export { useFiltersStore };
