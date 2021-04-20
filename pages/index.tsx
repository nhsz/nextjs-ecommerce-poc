import Head from 'next/head';
import Image from 'next/image';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1>e-commerce POC</h1>
    </main>

    <div>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by <Image src='/vercel.svg' alt='Vercel Logo' height={'32'} width={'64'} />
      </a>
    </div>
  </div>
);

export default Home;
