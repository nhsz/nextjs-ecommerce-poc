import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { useStore } from '../../../store';

const Layout: FC = ({ children }) => {
  const setCartIsOpen = useStore(state => state.setCartIsOpen);

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

            <Box cursor='pointer' onClick={() => setCartIsOpen()}>
              <Image src='/cart.svg' alt='Cart icon' width={'auto'} height={8} />
            </Box>
          </Flex>
        </nav>
      </Stack>

      <Stack>{children}</Stack>
    </Stack>
  );
};

export { Layout };
