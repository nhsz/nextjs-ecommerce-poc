import { Box, Divider, Flex, Grid, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import {
  CategoryFilter,
  FeaturedDescription,
  FeaturedDetails,
  FeaturedImage,
  PeopleAlsoBuy,
  PriceFilter,
  Product,
  ShoppingList,
  SortBy
} from '../components';
import { Fields, ProductData } from '../components/Product/types';
import { AddToCartButton, PhotosHeading } from '../components/UI';
import { useCartStore } from '../store';
import { getFiltered, getProducts, removeDuplicatesFrom } from '../utils';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
  });
  const results = await client.getEntries<Fields>({ content_type: 'product' });
  const products: ProductData[] = getProducts(results);

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
  const cartIsOpen = useCartStore(state => state.cartIsOpen);
  const featuredProduct = products.filter(product => product.featured)[0];
  // if (!featuredProduct) featuredProduct = generateRandomFeatured(products);
  const totalProducts = getFiltered(products).length;

  const { name, price, category, details } = featuredProduct;
  const { src, alt } = featuredProduct.image;
  const { height, width } = featuredProduct.details.dimensions;
  const { size } = featuredProduct.details;

  return (
    <div>
      <Head>
        <title>NextJS e-commerce | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Stack px={{ base: 0, md: 16 }} position='relative'>
          <Stack>
            <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
          </Stack>

          {cartIsOpen && <ShoppingList />}
        </Stack>

        <Stack
          spacing={10}
          mt={{ base: 0, md: 6 }}
          px={{ base: 6, md: 16 }}
          mb={{ base: 8, md: 16 }}
        >
          <Flex
            mt={6}
            direction={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
            flexWrap='wrap'
          >
            <Heading as='h2' size='lg' fontWeight='700' mb={8}>
              {name}
            </Heading>

            <AddToCartButton product={{ name, price, src, alt }} />

            <Stack mb={2} order={{ base: 1, md: 2 }} w='100%'>
              <FeaturedImage info={{ src, alt, height }} />
            </Stack>
          </Flex>

          <Wrap
            direction={{ base: 'column', lg: 'row' }}
            justify='space-between'
            mb={{ base: 8, md: 16 }}
          >
            <Stack flex={0.72}>
              <FeaturedDescription info={{ name, category, description: details.description }} />
            </Stack>

            <Stack flex={0.28}>
              <PeopleAlsoBuy />
              <FeaturedDetails info={{ height, width, size }} />
            </Stack>
          </Wrap>
        </Stack>

        <Stack px={{ base: 0, md: 16 }}>
          <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
        </Stack>

        <Stack
          px={{ base: 6, md: 16 }}
          mt={{ base: 0, md: 6 }}
          mb={{ base: 6, md: 16 }}
          spacing={10}
        >
          <Flex mt={6} direction='row' justifyContent='space-between' alignItems='center'>
            <PhotosHeading />

            <Box display={{ base: 'block', md: 'none' }} cursor='pointer'>
              <Image src='/filters.svg' alt='Open filters' width={6} height={6} />
            </Box>

            <SortBy />
          </Flex>
        </Stack>

        <Stack px={{ base: 6, md: 16 }} mb={16}>
          <Flex direction='row' justify='space-between'>
            <Stack display={{ base: 'none', md: 'block' }} mr={8}>
              <CategoryFilter
                categories={removeDuplicatesFrom(products.map(p => p.category).sort())}
              />

              <Stack>
                <Divider w={48} mb={4} />
              </Stack>

              <PriceFilter />
            </Stack>

            <Stack alignItems='center' maxW={{ md: '976px' }} flex={1}>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  xl: 'repeat(3, 1fr)'
                }}
                gap={{ base: 10, md: 8 }}
                mb={{ base: 6, md: 12 }}
              >
                {getFiltered(products)
                  .slice(0, 6)
                  .map(product => {
                    return <Product key={product.id} product={product} />;
                  })}
              </Grid>
            </Stack>

            {totalProducts === 0 && (
              <Stack justifyContent='center' alignItems='center' w='100%' h={96}>
                <Text color='gray.500' fontSize='xl' fontWeight={300}>
                  There are no products that match your criteria.
                </Text>
              </Stack>
            )}
          </Flex>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
