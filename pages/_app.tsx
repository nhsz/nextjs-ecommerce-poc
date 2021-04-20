import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Layout } from '../components';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
