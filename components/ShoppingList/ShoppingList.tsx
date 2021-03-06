import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { useCartStore } from '../../store';
import { SecondaryButton } from '../UI';

export interface CartProduct {
  name: string;
  price: number;
  src: string;
  alt: string;
}

const ShoppingList: FC = () => {
  const [setCartIsOpen, clearCart, cartProducts, totalAmount] = useCartStore(state => [
    state.setCartIsOpen,
    state.clearCart,
    state.cartProducts,
    state.totalAmount
  ]);

  const handleClick = () => setCartIsOpen(false);

  return (
    <Box
      border='4px solid #E4E4E4'
      backgroundColor='#fff'
      position='absolute'
      top={-2}
      right={{ base: 0, md: 16 }}
      w={{ base: '100%', md: '420px' }}
      zIndex={9999}
      p={4}
    >
      <Stack>
        <Flex justifyContent='flex-end' mb={-4}>
          <Box cursor='pointer' onClick={handleClick}>
            <Image src='/close.svg' alt='Close cart' width={20} height={20} />
          </Box>
        </Flex>

        {cartProducts.length ? (
          cartProducts.map(product => {
            const { name, price, src, alt } = product;

            return (
              <Flex key={name} justifyContent='space-between' alignItems='center'>
                <Stack mr={4} flex={2 / 3}>
                  <Text fontSize='lg' fontWeight='700' maxW={72}>
                    {name}
                  </Text>

                  <Text fontSize='3xl' fontWeight='400' color='#656565'>
                    ${price}
                  </Text>
                </Stack>

                <Stack flex={1 / 3}>
                  <Image src={src} alt={alt} height={'auto'} width={'100%'} objectFit='contain' />
                </Stack>
              </Flex>
            );
          })
        ) : (
          <Text color='gray.500' fontSize='lg'>
            Cart is empty.
          </Text>
        )}

        {cartProducts.length && (
          <Box mt={2}>
            <Text color='gray.500' fontWeight={500} display='inline-block' mr={1}>
              Total:
            </Text>
            <Text color='gray.500' fontWeight={300} display='inline-block'>
              ${totalAmount}
            </Text>
          </Box>
        )}

        <Stack>
          <Divider w='100%' mb={4} />
        </Stack>

        <SecondaryButton
          handleClick={() => {
            clearCart();
            setCartIsOpen(false);
          }}
        />
      </Stack>
    </Box>
  );
};

export { ShoppingList };
