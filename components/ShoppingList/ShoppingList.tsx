import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { ClearCartButton } from '../UI';

interface Props {
  info: {
    name: string;
    price: number;
    src: string;
    alt: string;
    setCartIsOpen: (isOpen: boolean) => void;
  };
}

const ShoppingList: FC<Props> = ({ info }) => {
  const { name, price, src, alt, setCartIsOpen } = info;

  return (
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

        <ClearCartButton />
      </Stack>
    </Box>
  );
};

export { ShoppingList };
