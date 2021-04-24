import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const AddToCartButton: FC = () => {
  return (
    <Stack order={{ base: 2, md: 1 }} mt={{ base: 3, md: 0 }} mb={{ md: 4 }}>
      <Button variant='primary-btn' _hover={{ bg: 'gray.700' }} order={{ base: 2, md: 1 }}>
        ADD TO CART
      </Button>
    </Stack>
  );
};

export { AddToCartButton };
