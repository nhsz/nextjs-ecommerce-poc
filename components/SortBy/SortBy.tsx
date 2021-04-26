import { Box, Image, Text } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import { useSortStore } from '../../store';

const SortBy: FC = () => {
  const [setType, setOrder] = useSortStore(state => [state.setType, state.setOrder]);

  const handleClick = () => setOrder();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value);

  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <span>
        <Box display='inline' cursor='pointer' onClick={handleClick}>
          <Image
            display='inline-block'
            mr={2}
            src='/sort-arrows.svg'
            alt='Change sorting order'
            width={3}
            height={'auto'}
          />
        </Box>
        <Text fontWeight='400' color='#9B9B9B' display='inline-block'>
          Sort by
        </Text>
      </span>

      <select onChange={handleChange}>
        <option value='price'>Price</option>
        <option value='alphabetically'>Alphabetically</option>
      </select>
    </Box>
  );
};

export { SortBy };
