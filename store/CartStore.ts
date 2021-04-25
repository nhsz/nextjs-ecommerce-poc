import create from 'zustand';
import { CartProduct } from '../components';

type CartStore = {
  cartIsOpen: boolean;
  cartProducts: CartProduct[];
  totalAmount: number;
  numberOfProducts: number;
  setCartIsOpen: VoidFunction;
  setCartProducts: (product: CartProduct) => void;
  clearCart: VoidFunction;
};

const useCartStore = create<CartStore>(set => ({
  cartIsOpen: false,
  cartProducts: [],
  totalAmount: 0,
  numberOfProducts: 0,
  setCartIsOpen: () => set(state => ({ ...state, cartIsOpen: !state.cartIsOpen })),
  setCartProducts: product => {
    set(state => {
      const alreadyAdded = state.cartProducts.some(entry => entry.name === product.name);

      if (alreadyAdded)
        return {
          ...state,
          totalAmount: state.totalAmount + product.price,
          numberOfProducts: state.numberOfProducts + 1
        };

      return {
        ...state,
        cartProducts: [...state.cartProducts, product],
        totalAmount: state.totalAmount + product.price,
        numberOfProducts: state.numberOfProducts + 1
      };
    });
  },
  clearCart: () =>
    set(state => ({ ...state, cartProducts: [], totalAmount: 0, numberOfProducts: 0 }))
}));

export { useCartStore };
