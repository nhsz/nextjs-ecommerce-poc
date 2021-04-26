import { ProductData } from '../components';

const sortBy = (products: ProductData[], criteria: string, order: string): ProductData[] => {
  if (criteria === 'price') {
    if (order === 'ascending') {
      // price (ascending)
      return [...products].sort((a, b) => a.price - b.price);
    } else {
      // price (descending)
      return [...products].sort((a, b) => b.price - a.price);
    }
  } else {
    if (order === 'ascending') {
      // alphabetically (ascending)
      return [...products].sort((a, b) => (a.name < b.name ? -1 : 1));
    } else {
      // alphabetically (descending)
      return [...products].sort((a, b) => (a.name > b.name ? -1 : 1));
    }
  }
};

export { sortBy };
