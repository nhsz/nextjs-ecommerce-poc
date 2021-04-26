import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    primary: '#000',
    secondary: '#E5E5E5'
  },
  components: {
    Button: {
      variants: {
        'primary-btn': {
          color: 'white',
          backgroundColor: 'primary',
          borderRadius: 'none',
          paddingX: 8
        }
      }
    },
    Radio: {
      variants: {
        squared: {
          WebkitAppearance: 'checkbox',
          MozAppearance: 'checkbox'
        }
      }
    }
  }
});
