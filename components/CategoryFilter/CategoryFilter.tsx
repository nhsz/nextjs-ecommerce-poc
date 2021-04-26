import { Checkbox, CheckboxGroup, Heading, Stack, Text } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';
import { useFiltersStore } from '../../store';

interface Props {
  title?: string;
  categories: string[];
}

const CategoryFilter: FC<Props> = ({ title = 'Category', categories }) => {
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
      <Heading as='h4' fontSize={{ base: '2xl', md: 'md' }} mb={{ base: 2, md: 8 }}>
        {title}
      </Heading>

      <CheckboxGroup colorScheme='gray'>
        <Stack onChange={handleChange}>
          {categories.map(category => (
            <Checkbox key={category} value={category}>
              <Text fontSize={{ base: 'xl', md: 'md' }}>{category}</Text>
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
};

export { CategoryFilter };
