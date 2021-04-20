export interface ProductData {
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  image: ProductImage;
  bestseller: boolean;
  featured: boolean;
  details: ProductDetails;
}

interface ProductImage {
  alt: number;
  src: string;
}

interface ProductDetails {
  dimensions: ProductDimensions;
  size: number;
  description: string;
}

interface ProductDimensions {
  width: number;
  height: number;
}
