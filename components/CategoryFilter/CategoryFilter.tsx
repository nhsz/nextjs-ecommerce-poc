import { Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const CategoryFilter: FC = () => {
  return (
    <Stack mb={6}>
      <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
        Category
      </Heading>

      <CheckboxGroup colorScheme='gray'>
        <Stack>
          <Checkbox value='Fashion'>Fashion</Checkbox>
          <Checkbox value='Food'>Food</Checkbox>
          <Checkbox value='Lifestyle'>Lifestyle</Checkbox>
          <Checkbox value='Nature'>Nature</Checkbox>
          <Checkbox value='Summer'>Summer</Checkbox>
          <Checkbox value='Travel'>Travel</Checkbox>
          <Checkbox value='Winter'>Winter</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export { CategoryFilter };
