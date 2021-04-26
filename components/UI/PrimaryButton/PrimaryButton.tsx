import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  text: string;
  handleClick: VoidFunction;
}

const PrimaryButton: FC<Props> = ({ text, handleClick }) => {
  return (
    <Stack order={{ base: 2, md: 1 }} mt={{ base: 3, md: 0 }} mb={{ md: 4 }} onClick={handleClick}>
      <Button variant='primary-btn' _hover={{ bg: 'gray.700' }} order={{ base: 2, md: 1 }}>
        {text}
      </Button>
    </Stack>
  );
};

export { PrimaryButton };
