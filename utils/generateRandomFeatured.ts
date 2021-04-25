import { ProductData } from '../components';

const generateRandomFeatured = (products: ProductData[]): ProductData =>
  products[Math.floor(Math.random() * products.length)];

export { generateRandomFeatured };
