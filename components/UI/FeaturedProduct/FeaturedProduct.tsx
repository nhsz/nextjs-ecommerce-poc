import { Image } from '@chakra-ui/react';
import { FC } from 'react';

interface ImageDetails {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const FeaturedProduct: FC<ImageDetails> = ({ src, alt, height, width }) => {
  return <Image src={src} alt={alt} height={height} width={width} objectFit='cover' />;
};

export { FeaturedProduct };
