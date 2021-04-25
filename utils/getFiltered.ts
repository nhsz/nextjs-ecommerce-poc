import { ProductData } from '../components';
import { useFiltersStore } from '../store';

const getFiltered = (products: ProductData[]): ProductData[] => {
  const filters = useFiltersStore(state => state.filters);

  return products.filter(p => {
    if (filters.length) return filters.some(f => p.category === f);
    // if no filter applied, keep the current products grid
    return p === p;
  });
};

export { getFiltered };
