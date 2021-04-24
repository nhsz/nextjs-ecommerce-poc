import { Box, Grid, Image, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const PeopleAlsoBuyGrid: FC = () => {
  return (
    <Stack>
      <Grid templateColumns='repeat(3, 1fr)' gap={{ base: 6, md: 8 }} mb={{ base: 6, md: 12 }}>
        <Box>
          <Image
            src={'/sample-1.jpg'}
            alt={'Dezeen Yener Torun photographs Minimalist architecture in Turkey'}
            height='auto'
            width='100%'
            objectFit='cover'
          />
        </Box>

        <Box>
          <Image
            src={'/sample-2.jpg'}
            alt={'Vine Plant on White Window'}
            height='auto'
            width='100%'
            objectFit='cover'
          />
        </Box>

        <Box>
          <Image
            src={'/sample-3.jpg'}
            alt={'Funny Balloons'}
            height='auto'
            width='100%'
            objectFit='cover'
          />
        </Box>
      </Grid>
    </Stack>
  );
};

export { PeopleAlsoBuyGrid };
