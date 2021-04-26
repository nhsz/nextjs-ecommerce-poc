import { ProductData } from '../components';
import { useFiltersStore, useSortStore } from '../store';
import { isInRange, sortBy } from '../utils';

const useFilter = (products: ProductData[]): ProductData[] => {
  const [filters, range] = useFiltersStore(state => [state.filters, state.priceRange]);
  const [criteria, order] = useSortStore(state => [state.type, state.order]);

  const filteredProducts = products
    .filter(p => {
      // filter by category
      if (filters.length) return filters.some(f => p.category === f);
      // if no filter applied, keep the current products grid
      return p === p;
    })
    // filter by price
    .filter(ps => isInRange(ps.price, range));

  return sortBy(filteredProducts, criteria, order);
};

export { useFilter };
