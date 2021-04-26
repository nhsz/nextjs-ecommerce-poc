import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const BackgroundOverlay: FC = () => {
  return (
    <Box
      backgroundColor='#000'
      opacity={0.2}
      w='100%'
      h='100vh'
      position='fixed'
      bottom={0}
      zIndex={99}
    ></Box>
  );
};

export { BackgroundOverlay };
