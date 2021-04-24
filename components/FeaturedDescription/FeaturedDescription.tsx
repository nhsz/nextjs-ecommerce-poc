import { Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  info: {
    name: string;
    category: string;
    description: string;
  };
}

const FeaturedDescription: FC<Props> = ({ info }) => {
  const { name, category, description } = info;

  return (
    <>
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
          {description}
        </Text>
      </Stack>
    </>
  );
};

export { FeaturedDescription };
