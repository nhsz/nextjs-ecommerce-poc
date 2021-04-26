import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useCartStore } from '../../store';
import { ProductData } from './types';

interface Props {
  product: ProductData;
}

const Product: FC<Props> = ({ product }) => {
  const [setCartIsOpen, setCartProducts] = useCartStore(state => [
    state.setCartIsOpen,
    state.setCartProducts
  ]);
  const { id, name, price, category, bestseller } = product;
  const { src, alt } = product.image;

  const handleClick = () => {
    setCartProducts({ name, price, src, alt });
    setCartIsOpen(true);
  };

  return (
    <Box key={id} mb={{ base: 6, md: 2 }}>
      <Box position='relative' height='400px' role='group' mb={1}>
        <Stack>
          <Image src={src} alt={alt} height='400px' width='auto' objectFit='cover' />
        </Stack>

        {bestseller && (
          <Box position='absolute' top={0}>
            <Text color='#000' backgroundColor='#fff' size='sm' px={4} py={1} textAlign='center'>
              Bestseller
            </Text>
          </Box>
        )}

        <Box
          position='absolute'
          bottom={0}
          w='100%'
          opacity={0}
          pointerEvents='none'
          _groupHover={{ opacity: 1, pointerEvents: 'auto', cursor: 'pointer' }}
          transition='opacity 0.2s ease-in-out'
          onClick={handleClick}
        >
          <Text color='#fff' backgroundColor='#000' fontWeight={500} py={2} textAlign='center'>
            ADD TO CART
          </Text>
        </Box>
      </Box>

      <Stack>
        <Text fontSize='md' fontWeight='700' color='#656565' mb={-3}>
          {category}
        </Text>

        <Stack justifyContent='space-between' h={'104px'}>
          <Text fontSize='xl' fontWeight='700'>
            {name}
          </Text>
          <Text fontSize='2xl' color='#656565'>
            ${price}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export { Product };
