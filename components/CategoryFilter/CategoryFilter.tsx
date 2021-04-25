import { Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import { useFiltersStore } from '../../store';

interface Props {
  categories: string[];
}

const CategoryFilter: FC<Props> = ({ categories }) => {
  const [addFilter, removeFilter] = useFiltersStore(state => [state.addFilter, state.removeFilter]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    if (e.target.checked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };

  return (
    <Stack mb={6}>
      <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }} mb={8}>
        Category
      </Heading>

      <CheckboxGroup colorScheme='gray'>
        <Stack onChange={handleChange}>
          {categories.map(category => (
            <Checkbox key={category} value={category}>
              {category}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export { CategoryFilter };
