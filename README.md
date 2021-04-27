# NextJS e-commerce

e-commerce PoC built with NextJS, TypeScript, ChakraUI, Zustand and Contentful API for content delivery.

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

## Features

- **Featured product:** One of the products (digital images) have a flag indicating that it's a featured artwork and is displayed above the products grid.
- **Product grid:** Contains 6 artworks. After hovering over an image, an "add to cart" bar is displayed (you can click it to add a product to the cart). Some products have the bestseller flag too.
- **Cart:** Clicking "Add to cart" adds a product to the cart and and badge with a counter appears over the cart icon in the header. It also opens the cart dropdown with items. The dropdown can be opened by clicking the basket icon in the header too. Clicking the "Clear" button will remove items from the cart and hide the dropdown.
- **Pagination:** The products grid is paginated (6 items per page). The `PAGE_COUNT` is dynamically generated the pagination list is hidden when there's only 1 results page. 'prev' arrow is hidden on the first page and 'next' arrow is hidden on the last page.
- **Sorting:** you can sort items alphabetically or by price. Also change the order to 'ascending' or 'descending'. Items are ordered by price, ascending by default.
- **Filtering:** Items are filterable by category (multiple filters) and by price range (single filter).

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
