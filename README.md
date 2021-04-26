# NextJS e-commerce

## Run the project

```
npm i
npm start
```

## Stack used

- **NextJS** + **TypeScript**
- **Zustand** + hooks for state management
- **ChakraUI** for components UI
- **Contentful API** (CMS) for content delivery
- Assets: the images are taken from [Pexels](https://www.pexels.com/)
- `react-paginate` for pagination

## Schema

This is the shape of an entry that comes from the Contentful collection.

```json
{
  "name": "Person Posing Near Body of Water",
  "category": "fashion",
  "price": 101,
  "currency": "USD",
  "image": {
    "src": "",
    "alt": ""
  },
  "bestseller": true,
  "featured": true,
  "details": {
    "dimensions": {
      "width": 1020,
      "height": 1020
    },
    "size": 15000,
    "description": "What? One point twenty-one gigawatts. One point twenty-one gigawatts. Great Scott. Thank god I still got my hair. What on Earth is that thing I'm wearing? Kids, we're gonna have to eat this cake by ourselves, Uncle Joey didn't make parole again. I think it would be nice, if you all dropped him a line. I don't know, I can't keep up with all of your boyfriends."
  }
}
```

## Comments

Pagination is dynamic and only display when there's more than 1 page to show (6 products per page.)

## Demo

See it [live](https://nextjs-ecommerce-poc.vercel.app/)
