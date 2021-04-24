import { Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PhotosHeading: FC = () => {
  return (
    <Heading as='h3' fontSize={{ base: 'md', md: 'lg' }} height={6}>
      <Text fontWeight='700' display='inline-block' mr={1} mb={8}>
        Photography /
      </Text>

      <Text fontWeight='400' color='#9B9B9B' display='inline-block'>
        Premium Photos
      </Text>
    </Heading>
  );
};

export { PhotosHeading };
