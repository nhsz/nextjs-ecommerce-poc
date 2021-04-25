import create from 'zustand';
import { removeDuplicatesFrom } from '../../utils';

type FiltersStore = {
  filters: string[];
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
};

const useFiltersStore = create<FiltersStore>(set => ({
  filters: [],
  addFilter: filter =>
    set(state => ({ ...state, filters: removeDuplicatesFrom(state.filters.concat(filter)) })),
  removeFilter: filter =>
    set(state => ({ ...state, filters: state.filters.filter(f => f !== filter) }))
}));

export { useFiltersStore };
