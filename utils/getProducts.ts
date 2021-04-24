import { Entry, EntryCollection } from 'contentful';
import { Fields, ProductData } from '../components/Product/types';

const getProducts = (results: EntryCollection<Fields>): ProductData[] =>
  results.items.map((result: Entry<Fields>) => {
    const { id } = result.sys;
    const {
      name,
      slug,
      category,
      price,
      currency,
      image,
      bestseller,
      featured,
      details
    } = result.fields;

    return {
      id,
      name,
      slug,
      category,
      price,
      currency,
      image,
      bestseller,
      featured,
      details
    };
  });

export { getProducts };
