import { ProductData } from '../components';
import { useFiltersStore } from '../store';
import { isInRange } from '../utils';

const useFilter = (products: ProductData[]): ProductData[] => {
  const filters = useFiltersStore(state => state.filters);
  const range = useFiltersStore(state => state.priceRange);

  return (
    products
      .filter(p => {
        // filter by category
        if (filters.length) return filters.some(f => p.category === f);
        // if no filter applied, keep the current products grid
        return p === p;
      })
      // filter by price
      .filter(ps => isInRange(ps.price, range))
  );
};

export { useFilter };
