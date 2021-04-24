import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Grid,
  Heading,
  Image as ChakraImage,
  Stack,
  Text,
  Wrap
} from '@chakra-ui/react';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC, useState } from 'react';
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
  const [cartIsOpen, setCartIsOpen] = useState(true);

  const featuredProduct = products.filter(product => product.featured)[0];
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

          {cartIsOpen && (
            <Box
              border='4px solid #E4E4E4'
              backgroundColor='#fff'
              position='absolute'
              top={-2}
              right={16}
              w={'auto'}
              minW={96}
              zIndex={9999}
              p={4}
            >
              <Stack>
                <Flex justifyContent='flex-end' mb={-4}>
                  <Box cursor='pointer' onClick={() => setCartIsOpen(false)}>
                    <Image src='/close.svg' alt='Close cart' width={20} height={20} />
                  </Box>
                </Flex>

                <Flex justifyContent='space-between' alignItems='center'>
                  <Stack mr={4} flex={2 / 3}>
                    <Text fontSize='lg' fontWeight='700' maxW={72}>
                      {name}
                    </Text>

                    <Text fontSize='3xl' fontWeight='400' color='#656565'>
                      ${price}
                    </Text>
                  </Stack>

                  <Stack flex={1 / 3}>
                    <Image src={src} alt={alt} height={'auto'} width={'100%'} objectFit='contain' />
                  </Stack>
                </Flex>

                <Stack>
                  <Divider w='100%' mb={4} />
                </Stack>

                <Button
                  color='#000'
                  backgroundColor='#fff'
                  border='2px'
                  borderColor='#000'
                  variant='primary-btn'
                  _hover={{ color: '#fff', bg: '#000' }}
                  order={{ base: 2, md: 1 }}
                >
                  CLEAR
                </Button>
              </Stack>
            </Box>
          )}
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

            <Stack order={{ base: 2, md: 1 }} mt={{ base: 3, md: 0 }} mb={{ md: 4 }}>
              <Button variant='primary-btn' _hover={{ bg: 'gray.700' }} order={{ base: 2, md: 1 }}>
                ADD TO CART
              </Button>
            </Stack>

            <Stack mb={2} order={{ base: 1, md: 2 }} w='100%'>
              <Stack h={{ base: 60, md: 96 }} position='relative' mb={2}>
                <Image
                  src={src}
                  alt={alt}
                  height={height}
                  width={'auto'}
                  objectFit='cover'
                  priority={true}
                />

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

        <Stack
          px={{ base: 6, md: 16 }}
          mt={{ base: 0, md: 6 }}
          mb={{ base: 6, md: 16 }}
          spacing={10}
        >
          <Flex mt={6} direction='row' justifyContent='space-between' alignItems='center'>
            <Heading as='h3' fontSize={{ base: 'md', md: 'lg' }} height={6}>
              <Text fontWeight='700' display='inline-block' mr={1} mb={8}>
                Photography /
              </Text>

              <Text fontWeight='400' color='#9B9B9B' display='inline-block'>
                Premium Photos
              </Text>
            </Heading>

            <Box display={{ base: 'block', md: 'none' }} cursor='pointer'>
              <ChakraImage src='/filters.svg' alt='Open filters' width={6} height={6} />
            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
              <span>
                <Box display='inline'>
                  <ChakraImage
                    display='inline-block'
                    mr={2}
                    src='/sort-arrows.svg'
                    alt='Change sorting order'
                    width={3}
                    height={'auto'}
                    cursor='pointer'
                  />
                </Box>
                <Text fontWeight='400' color='#9B9B9B' display='inline-block'>
                  Sort by
                </Text>
              </span>

              <select>
                <option value='0'>Alphabetically</option>
                <option value='1'>Price</option>
              </select>
            </Box>
          </Flex>
        </Stack>

        <Stack px={{ base: 6, md: 16 }}>
          <Flex direction='row' justify='space-between'>
            <Stack display={{ base: 'none', md: 'block' }} mr={8}>
              <Stack mb={6}>
                <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
                  Category
                </Heading>

                <CheckboxGroup colorScheme='gray'>
                  <Stack>
                    <Checkbox value='Fashion'>Fashion</Checkbox>
                    <Checkbox value='Food'>Food</Checkbox>
                    <Checkbox value='Lifestyle'>Lifestyle</Checkbox>
                    <Checkbox value='Nature'>Nature</Checkbox>
                    <Checkbox value='Summer'>Summer</Checkbox>
                    <Checkbox value='Travel'>Travel</Checkbox>
                    <Checkbox value='Winter'>Winter</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Stack>

              <Stack>
                <Divider w={48} mb={4} />
              </Stack>

              <Stack>
                <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
                  Price range
                </Heading>

                <CheckboxGroup colorScheme='gray'>
                  <Stack>
                    <Checkbox value='<20'>Lower than $20</Checkbox>
                    <Checkbox value='20-100'>$20 - $100</Checkbox>
                    <Checkbox value='100-200'>$100 - $200</Checkbox>
                    <Checkbox value='>200'>More than $200</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Stack>
            </Stack>

            <Stack alignItems='center' maxW={{ md: '976px' }} flex={1}>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  xl: 'repeat(3, 1fr)'
                }}
                gap={{ base: 8, md: 8 }}
                mb={{ base: 6, md: 12 }}
              >
                {products.map(product => {
                  return (
                    <Box key={product.id}>
                      <Box position='relative' height='400px' role='group' mb={1}>
                        <Stack>
                          <Image
                            src={product.image.src}
                            alt={product.image.alt}
                            height='400px'
                            width='auto'
                            objectFit='cover'
                          />
                        </Stack>

                        {product.bestseller && (
                          <Box position='absolute' top={0}>
                            <Text
                              color='#000'
                              backgroundColor='#fff'
                              size='sm'
                              px={4}
                              py={1}
                              textAlign='center'
                            >
                              Bestseller
                            </Text>
                          </Box>
                        )}

                        <Box
                          position='absolute'
                          bottom={0}
                          w='100%'
                          opacity={0}
                          pointerEvents='none'
                          _groupHover={{ opacity: 1, pointerEvents: 'auto', cursor: 'pointer' }}
                          transition='opacity 0.2s ease-in-out'
                        >
                          <Text
                            color='#fff'
                            backgroundColor='#000'
                            fontWeight={500}
                            py={2}
                            textAlign='center'
                          >
                            ADD TO CART
                          </Text>
                        </Box>
                      </Box>

                      <Stack>
                        <Stack mb={-2}>
                          <Text fontSize='md' fontWeight='700' color='#656565' mb={-2}>
                            {product.category}
                          </Text>

                          <Text fontSize='2xl' fontWeight='700' mb={-2}>
                            {product.name}
                          </Text>
                        </Stack>

                        <Text fontSize='2xl' color='#656565'>
                          ${product.price}
                        </Text>
                      </Stack>
                    </Box>
                  );
                })}
              </Grid>
            </Stack>
          </Flex>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
