import { Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useFiltersStore } from '../../store';
import styles from './PriceFilter.module.css';

const PriceFilter: FC = () => {
  const [priceRange, setPriceRange] = useFiltersStore(state => [
    state.priceRange,
    state.setPriceRange
  ]);

  const values = [
    { range: '<20', text: 'Lower than $20' },
    { range: '20-100', text: '$20 - $100' },
    { range: '100-200', text: '$100 - $200' },
    { range: '>200', text: 'More than $200' }
  ];

  return (
    <Stack>
      <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
        Price range
      </Heading>

      <RadioGroup colorScheme='gray' onChange={setPriceRange} value={priceRange}>
        <Stack className={styles.radio}>
          {values.map(({ range, text }) => {
            return (
              <Radio
                key={range}
                className={styles.squared}
                value={range}
                color='green'
                _checked={{
                  color: '#fff !important',
                  backgroundColor: '#718096'
                }}
              >
                {text}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export { PriceFilter };
