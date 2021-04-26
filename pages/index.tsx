import { Box, Divider, Flex, Grid, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import api from '../api';
import {
  CategoryFilter,
  FeaturedDescription,
  FeaturedDetails,
  FeaturedImage,
  MobileFilters,
  PeopleAlsoBuy,
  PriceFilter,
  Product,
  ShoppingList,
  SortBy
} from '../components';
import { Fields, ProductData } from '../components/Product/types';
import { BackgroundOverlay, PhotosHeading, PrimaryButton } from '../components/UI';
import { useFilter } from '../hooks';
import { useCartStore } from '../store';
import { getProducts, removeDuplicatesFrom } from '../utils';
import styles from './index.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const client = api.contentful.connect();
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
  const [cartIsOpen, setCartProducts, setCartIsOpen] = useCartStore(state => [
    state.cartIsOpen,
    state.setCartProducts,
    state.setCartIsOpen
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilters, setMobileFilters] = useState(false);
  const filteredProducts = useFilter(products);
  const totalProducts = filteredProducts.length;
  const featuredProduct = products.filter(product => product.featured)[0];

  // pagination
  const LIMIT = 6;
  const PAGE_COUNT = Math.ceil(products.length / LIMIT);
  const INIT = currentPage * LIMIT - LIMIT;
  const END = currentPage * LIMIT;
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  // Featured Product Info
  const { name, price, category, details } = featuredProduct;
  const { src, alt } = featuredProduct.image;
  const { height, width } = featuredProduct.details.dimensions;
  const { size } = featuredProduct.details;

  // mobile filters
  const handleClick = () => setMobileFilters(true);
  const handleClose = () => setMobileFilters(false);

  return (
    <div>
      <Head>
        <title>NextJS e-commerce | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {mobileFilters && (
          <Stack display={{ base: 'block', md: 'none' }} position='relative' zIndex={999}>
            <BackgroundOverlay />
            <Stack w='100%' position='fixed' bottom={0} zIndex={999}>
              <MobileFilters products={products} handleClose={handleClose} />
            </Stack>
          </Stack>
        )}

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

            <PrimaryButton
              text='ADD TO CART'
              handleClick={() => {
                setCartProducts({ name, price, src, alt });
                setCartIsOpen(true);
              }}
            />

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

            <Box display={{ base: 'block', md: 'none' }} cursor='pointer' onClick={handleClick}>
              <Image src='/filters.svg' alt='Open filters' width={6} height={6} />
            </Box>

            <SortBy />
          </Flex>
        </Stack>

        <Stack px={{ base: 6, md: 16 }} mb={10}>
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
                {filteredProducts.slice(INIT, END).map(product => {
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

        <Flex justifyContent='center' mb={16}>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            initialPage={1}
            pageCount={PAGE_COUNT}
            onPageChange={handlePageChange}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            containerClassName={styles.container}
            previousLinkClassName={styles.previous}
            nextLinkClassName={styles.next}
            disabledClassName={styles.disabled}
            activeClassName={styles.active}
          />
        </Flex>
      </main>
    </div>
  );
};

export default Home;
