import { Box, Divider, Flex, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { CategoryFilter, PriceFilter, ProductData } from '../../components';
import { useFiltersStore, useSortStore } from '../../store';
import { removeDuplicatesFrom } from '../../utils';
import { PrimaryButton, SecondaryButton } from '../UI';

interface Props {
  products: ProductData[];
  handleClose: VoidFunction;
}

const MobileFilters: FC<Props> = ({ products, handleClose }) => {
  const resetFilters = useFiltersStore(state => state.resetFilters);
  const resetSort = useSortStore(state => state.resetSort);

  const handleClear = () => {
    resetFilters();
    resetSort();
    handleClose();
  };

  return (
    <Box py={6} backgroundColor='#fff' h={'90vh'} overflowY='scroll' position='relative'>
      <Flex justifyContent='flex-end' position='absolute' top={7} right={6}>
        <Box cursor='pointer' onClick={handleClose}>
          <Image src='/close.svg' alt='Close cart' width={20} height={20} />
        </Box>
      </Flex>

      <Stack px={6} mr={8} mb={16}>
        <CategoryFilter
          title='Filter'
          categories={removeDuplicatesFrom(products.map(p => p.category).sort())}
        />

        <Stack>
          <Divider w={48} mb={4} />
        </Stack>

        <PriceFilter />
      </Stack>

      <Stack
        px={6}
        pt={10}
        pb={8}
        position='fixed'
        bottom={0}
        h={20}
        w='100%'
        borderTop='4px solid #E4E4E4'
        backgroundColor='#fff'
      >
        <Flex justifyContent='space-between' alignItems='center' h='100%'>
          <Stack w='47%'>
            <SecondaryButton handleClick={handleClear} />
          </Stack>
          <Stack mt={-3} w='47%'>
            <PrimaryButton text='SAVE' handleClick={handleClose} />
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export { MobileFilters };
