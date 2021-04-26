import create from 'zustand';

type Criteria = 'alphabetically' | 'price' | '';
type Order = 'ascending' | 'ascending';

type SortStore = {
  type: Criteria;
  order: Order;
  setType: (type: Criteria) => void;
  setOrder: (order: Order) => void;
};

const useSortStore = create<SortStore>(set => ({
  type: '',
  order: 'ascending',
  setType: type => set(state => ({ ...state, type })),
  setOrder: order => set(state => ({ ...state, order }))
}));

export { useSortStore };
