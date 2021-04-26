import { ContentfulClientApi, createClient } from 'contentful';

export default {
  contentful: {
    connect: (): ContentfulClientApi =>
      createClient({
        space: process.env.CONTENTFUL_SPACE_ID ?? '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
      })
  }
};
