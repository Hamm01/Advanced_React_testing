# Infinite Scroll project implementation with api

# Instructions

1. Create an infinitely scrolling grid of photos using the API.
   - The list should not break if there are no more photos to load.
   - The list should not break if the user scrolls up and down quickly.
   - The list should only load new photos when the user reaches (or gets close to) the bottom of the page.

## Bonus:

1. Add a simple skeleton loading animation for when the photos are loading.
   - The `index.html` file has a demo of what the skeleton loading animation should look like.

# API Information

The API has the following endpoints:

- `GET /photos?_page=<page>&_limit=<limit>` - Returns up to `<limit>` photos starting at `<page>` page.
- `GET /photos-short-list?_page=<page>&_limit=<limit>` - This is identical to the above endpoint but this endpoint only has 100 photos total so you can more easily test what happens when you reach the end of the list.

This API also uses the `Link` HTTP header to give you back the urls to the `next`, `previous`, `first`, and `last` pages. In our case we really only need the `next` page url. In order to parse this header you can use the `parseLinkHeader` function in the `client` folder. For more details on how the function works check out the comments above the function definition.
