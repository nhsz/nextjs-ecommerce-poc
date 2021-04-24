import { Box, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  info: {
    src: string;
    alt: string;
    height: number;
  };
}

const FeaturedImage: FC<Props> = ({ info }) => {
  const { src, alt, height } = info;

  return (
    <Stack h={{ base: 60, md: 96 }} position='relative' mb={2}>
      <Image src={src} alt={alt} height={height} width={'auto'} objectFit='cover' priority={true} />

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
  );
};

export { FeaturedImage };
