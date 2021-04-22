import { Box, Button, Flex, Grid, Heading, Stack, Text, Wrap } from '@chakra-ui/react';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { Fields, ProductData } from '../components';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
  });
  const results = await client.getEntries<Fields>({ content_type: 'product' });
  const products: ProductData[] = results.items.map(result => {
    const { id } = result.sys;
    const {
      name,
      slug,
      category,
      price,
      currency,
      image,
      bestseller,
      featured,
      details
    } = result.fields;

    return {
      id,
      name,
      slug,
      category,
      price,
      currency,
      image,
      bestseller,
      featured,
      details
    };
  });

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
        {products.map((product: ProductData) => {
          const { id, name, category, details } = product;
          const { src, alt } = product.image;
          const { height, width } = product.details.dimensions;
          const { size } = product.details;

          return (
            <Stack key={id} spacing={10} mt={{ base: 0, md: 6 }}>
              <Flex
                mt={6}
                direction={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                flexWrap='wrap'
              >
                <Heading as='h2' size='lg' fontWeight='700' mb={8}>
                  {name}
                </Heading>

                <Stack order={{ base: 2, md: 1 }} mt={{ base: 3, md: 0 }}>
                  <Button
                    color='white'
                    backgroundColor='black'
                    borderRadius='none'
                    px={8}
                    _hover={{ bg: 'gray.700' }}
                    order={{ base: 2, md: 1 }}
                  >
                    ADD TO CART
                  </Button>
                </Stack>

                <Stack mb={2} order={{ base: 1, md: 2 }} w='100%'>
                  <Stack h={{ base: 60, md: 96 }} position='relative' mb={2}>
                    <Image src={src} alt={alt} height={height} width={'auto'} objectFit='cover' />

                    <Box
                      position='absolute'
                      bottom={0}
                      left={0}
                      backgroundColor='white'
                      px={{ base: 8, sm: 12 }}
                      py={{ base: 2, sm: 3 }}
                    >
                      <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight='700'>
                        Photo of the day
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
              </Flex>

              <Wrap justify='space-between' mb={{ base: 8, md: 16 }}>
                <Stack flex={1}>
                  <Heading as='h3' size='md' fontWeight='700' mb={{ base: 6, md: 3 }}>
                    About the {name}
                  </Heading>

                  <Stack display={{ base: 'none', md: 'block' }}>
                    <Heading as='h4' size='md' fontWeight='700' color='#656565' mb={3}>
                      {category}
                    </Heading>
                  </Stack>

                  <Stack>
                    <Text
                      fontWeight='400'
                      color='#656565'
                      fontSize='lg'
                      lineHeight='27px'
                      maxW='690px'
                      mb={{ base: 6, md: 0 }}
                    >
                      {details.description}
                    </Text>
                  </Stack>
                </Stack>

                <Stack>
                  <Heading
                    as='h3'
                    size='md'
                    fontWeight='700'
                    textAlign={{ base: 'left', md: 'right' }}
                    mb={3}
                  >
                    People also buy
                  </Heading>

                  <Stack>
                    <Grid
                      templateColumns='repeat(3, 1fr)'
                      gap={{ base: 6, md: 8 }}
                      mb={{ base: 6, md: 12 }}
                    >
                      <Box>
                        <Image src={src} alt={alt} height='auto' width='100%' objectFit='cover' />
                      </Box>

                      <Box>
                        <Image src={src} alt={alt} height='auto' width='100%' objectFit='cover' />
                      </Box>

                      <Box>
                        <Image src={src} alt={alt} height='auto' width='100%' objectFit='cover' />
                      </Box>
                    </Grid>
                  </Stack>

                  <Stack>
                    <Heading
                      as='h3'
                      size='md'
                      fontWeight='700'
                      textAlign={{ base: 'left', md: 'right' }}
                      mb={3}
                    >
                      Details
                    </Heading>
                  </Stack>

                  <Stack>
                    <Text
                      fontWeight='400'
                      color='#656565'
                      fontSize='md'
                      textAlign={{ base: 'left', md: 'right' }}
                      // mb={{ base: 6, md: 0 }}
                    >
                      {`Size: ${height} x ${width} pixels`}
                    </Text>

                    <Text
                      fontWeight='400'
                      color='#656565'
                      fontSize='md'
                      textAlign={{ base: 'left', md: 'right' }}
                      // mb={{ base: 6, md: 0 }}
                    >
                      {`Size: ${size / 1000} ${size / 1000 < 1 ? 'kb' : 'mb'}`}
                    </Text>
                  </Stack>
                </Stack>
              </Wrap>

              <div key={id}>{/* <pre>{JSON.stringify(product, null, 2)}</pre> */}</div>
            </Stack>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
