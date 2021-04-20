import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <Stack backgroundColor='gray.50' height='100vh'>
      <Stack>
        <header>
          HEADER <nav>NAV</nav>{' '}
        </header>
      </Stack>

      <Stack>{children}</Stack>

      <Stack>
        <footer>FOOTER</footer>
      </Stack>
    </Stack>
  );
};

export { Layout };
