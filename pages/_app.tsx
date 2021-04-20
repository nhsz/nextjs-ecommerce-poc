import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      {/* <Layout></Layout> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
