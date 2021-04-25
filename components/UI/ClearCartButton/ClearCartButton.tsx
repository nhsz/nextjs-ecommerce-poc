import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useCartStore } from '../../../store';

const ClearCartButton: FC = () => {
  const clearCart = useCartStore(state => state.clearCart);

  return (
    <Button
      color='#000'
      backgroundColor='#fff'
      borderWidth='3px'
      borderColor='#000'
      variant='primary-btn'
      _hover={{ color: '#fff', bg: '#000' }}
      order={{ base: 2, md: 1 }}
      fontSize='lg'
      onClick={clearCart}
    >
      CLEAR
    </Button>
  );
};

export { ClearCartButton };
