import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  info: {
    height: number;
    width: number;
    size: number;
  };
}

const FeaturedDetails: FC<Props> = ({ info }) => {
  const { height, width, size } = info;

  return (
    <>
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
        >
          {`Size: ${height} x ${width} pixels`}
        </Text>

        <Text
          fontWeight='400'
          color='#656565'
          fontSize='md'
          textAlign={{ base: 'left', md: 'right' }}
        >
          {`Size: ${size / 1000} ${size / 1000 < 1 ? 'kb' : 'mb'}`}
        </Text>
      </Stack>
    </>
  );
};

export { FeaturedDetails };
