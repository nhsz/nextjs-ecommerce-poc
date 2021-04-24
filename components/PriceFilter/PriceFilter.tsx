import { Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const PriceFilter: FC = () => {
  return (
    <Stack>
      <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
        Price range
      </Heading>

      <CheckboxGroup colorScheme='gray'>
        <Stack>
          <Checkbox value='<20'>Lower than $20</Checkbox>
          <Checkbox value='20-100'>$20 - $100</Checkbox>
          <Checkbox value='100-200'>$100 - $200</Checkbox>
          <Checkbox value='>200'>More than $200</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export { PriceFilter };
