import { Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useFiltersStore } from '../../store';
// import styles from './PriceFilter.module.css';

const PriceFilter: FC = () => {
  const [priceRange, setPriceRange] = useFiltersStore(state => [
    state.priceRange,
    state.setPriceRange
  ]);

  return (
    <Stack>
      <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
        Price range
      </Heading>

      <RadioGroup colorScheme='gray' onChange={setPriceRange} value={priceRange}>
        <Stack>
          <Radio variant='squared' value='<20'>
            Lower than $20
          </Radio>
          <Radio variant='squared' value='20-100'>
            $20 - $100
          </Radio>
          <Radio variant='squared' value='100-200'>
            $100 - $200
          </Radio>
          <Radio variant='squared' value='>200'>
            More than $200
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export { PriceFilter };
