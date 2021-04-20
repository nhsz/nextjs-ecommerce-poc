import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { ProductData } from '../components';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
  });
  const results = await client.getEntries({ content_type: 'product' });
  const products = results.items.map(result => result.fields);

  return {
    props: {
      products
    }
  };
};

interface Products {
  products: ProductData[];
}

export const Home: FC<Products> = ({ products }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>NextJS e-commerce | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>e-commerce POC</h1>

        {products.map((product: ProductData) => {
          const { slug } = product;

          return (
            <div key={slug}>
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
          );
        })}
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
};

export default Home;
