import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { PeopleAlsoBuyGrid } from '../UI';

const PeopleAlsoBuy: FC = () => {
  return (
    <>
      <Heading as='h3' size='md' fontWeight='700' textAlign={{ base: 'left', md: 'right' }} mb={3}>
        People also buy
      </Heading>

      <PeopleAlsoBuyGrid />
    </>
  );
};

export { PeopleAlsoBuy };
