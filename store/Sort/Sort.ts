import create from 'zustand';

type SortStore = {
  type: string;
  order: string;
  setType: (type: string) => void;
  setOrder: VoidFunction;
};

const useSortStore = create<SortStore>(set => ({
  type: 'price',
  order: 'ascending',
  setType: type => set(state => ({ ...state, type })),
  setOrder: () =>
    set(state => ({ ...state, order: state.order === 'ascending' ? 'descending' : 'ascending' }))
}));

export { useSortStore };
