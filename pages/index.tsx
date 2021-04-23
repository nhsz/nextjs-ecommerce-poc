import { Box, Button, Divider, Flex, Grid, Heading, Stack, Text, Wrap } from '@chakra-ui/react';
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
  const featuredProduct = products.filter(product => product.featured)[0];
  const { name, category, details } = featuredProduct;
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
        <Stack px={{ base: 0, md: 16 }}>
          <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
        </Stack>

        <Stack spacing={10} mt={{ base: 0, md: 6 }} px={{ base: 6, md: 16 }}>
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
              <Button variant='primary-btn' _hover={{ bg: 'gray.700' }} order={{ base: 2, md: 1 }}>
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
                    <Image
                      src={'/sample-1.jpg'}
                      alt={'Dezeen Yener Torun photographs Minimalist architecture in Turkey'}
                      height='auto'
                      width='100%'
                      objectFit='cover'
                    />
                  </Box>

                  <Box>
                    <Image
                      src={'/sample-2.jpg'}
                      alt={'Vine Plant on White Window'}
                      height='auto'
                      width='100%'
                      objectFit='cover'
                    />
                  </Box>

                  <Box>
                    <Image
                      src={'/sample-3.jpg'}
                      alt={'Funny Balloons'}
                      height='auto'
                      width='100%'
                      objectFit='cover'
                    />
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
        </Stack>

        <Stack px={{ base: 0, md: 16 }}>
          <Divider border='none' height='4px' backgroundColor='#E4E4E4' />
        </Stack>

        <Stack spacing={10} mt={{ base: 0, md: 6 }} px={{ base: 6, md: 16 }}>
          <Flex mt={6} direction='row' justifyContent='space-between'>
            <Heading as='h3' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
              <Text fontWeight='700' display='inline-block' mr={1}>
                Photography /
              </Text>

              <Text fontWeight='400' color='#9B9B9B' display='inline-block'>
                Premium Photos
              </Text>
            </Heading>

            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontWeight='400' color='#9B9B9B' display='inline-block' mr={1}>
                Sort by
              </Text>

              <Text fontWeight='400' display='inline-block'>
                Price
              </Text>
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <Image src='/filters.svg' alt='Open filters' width={20} height={20} />
            </Box>
          </Flex>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
