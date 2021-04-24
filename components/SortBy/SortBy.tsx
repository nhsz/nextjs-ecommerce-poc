import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

const SortBy: FC = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <span>
        <Box display='inline'>
          <Image
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
  );
};

export { SortBy };
