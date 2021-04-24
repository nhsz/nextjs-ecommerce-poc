import { Button } from '@chakra-ui/react';
import { FC } from 'react';

const ClearCartButton: FC = () => {
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
    >
      CLEAR
    </Button>
  );
};

export { ClearCartButton };
