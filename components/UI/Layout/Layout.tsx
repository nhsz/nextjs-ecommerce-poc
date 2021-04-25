import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { useCartStore } from '../../../store';

const Layout: FC = ({ children }) => {
  const setCartIsOpen = useCartStore(state => state.setCartIsOpen);
  const numberOfProducts = useCartStore(state => state.numberOfProducts);

  return (
    <Stack>
      <Stack
        pt={{ base: 6, md: 12 }}
        pb={{ base: 2, md: 10 }}
        mb={{ base: 0, md: -4 }}
        px={{ base: 6, md: 16 }}
      >
        <nav>
          <Flex justifyContent='space-between' alignItems='center'>
            <Link href='/'>
              <a aria-label='Home'>
                <Image src='/bejamas_logo.svg' alt='Bejamas logo' width={'auto'} height={5} />
              </a>
            </Link>

            <Box cursor='pointer' onClick={() => setCartIsOpen(true)}>
              <Box position='relative'>
                <Image src='/cart.svg' alt='Cart icon' width={'auto'} height={8} />

                {numberOfProducts > 0 && (
                  <Box
                    position='absolute'
                    bottom={-3}
                    right={-4}
                    w={numberOfProducts < 100 ? 5 : 6}
                    h={4}
                  >
                    <Text
                      fontSize='xs'
                      color='#fff'
                      backgroundColor='#000'
                      fontWeight={600}
                      textAlign='center'
                    >
                      {numberOfProducts}
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          </Flex>
        </nav>
      </Stack>

      <Stack>{children}</Stack>
    </Stack>
  );
};

export { Layout };
