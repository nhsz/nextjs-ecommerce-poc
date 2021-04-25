import create from 'zustand';

type CartStore = {
  cartIsOpen: boolean;
  setCartIsOpen: VoidFunction;
};

const useStore = create<CartStore>(set => ({
  cartIsOpen: false,
  setCartIsOpen: () => set(state => ({ cartIsOpen: !state.cartIsOpen }))
}));

export { useStore };
