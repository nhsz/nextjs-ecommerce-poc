export interface Fields {
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

export interface ProductData extends Fields {
  id: string;
}

interface ProductImage {
  src: string;
  alt: string;
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
