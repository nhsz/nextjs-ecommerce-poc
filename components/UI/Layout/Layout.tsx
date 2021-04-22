import { Divider, Flex, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <Stack>
      <Stack
        px={{ base: 6, md: 16 }}
        pt={{ base: 6, md: 12 }}
        pb={{ base: 2, md: 10 }}
        mb={{ base: 0, md: -4 }}
      >
        <header>
          <nav>
            <Flex justifyContent='space-between' alignItems='center'>
              <Link href='/'>
                <a>
                  <Image src='/bejamas_logo.svg' alt='Bejamas logo' width={'auto'} height={5} />
                </a>
              </Link>

              <Image src='/cart.svg' alt='Cart icon' width={'auto'} height={8} />
            </Flex>
          </nav>
        </header>
      </Stack>

      <Stack px={{ base: 0, md: 16 }}>
        <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
      </Stack>

      <Stack px={{ base: 6, md: 16 }}>{children}</Stack>

      <Stack px={{ base: 0, md: 16 }}>
        <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
      </Stack>

      <Stack px={{ base: 6, md: 16 }} py={{ base: 4, md: 6 }}>
        <footer>FOOTER</footer>
      </Stack>
    </Stack>
  );
};

export { Layout };
