# algoliasearch-extensions-bundle

Bundle [jQuery](http://jquery.com/), [autocomplete.js](https://github.com/algolia/autocomplete.js) & [instantsearch.js](https://github.com/algolia/instantsearch.js) to propulse Algolia-powered extensions & plugins.

## dev

```sh
npm run watch
```

Then point your integration to load `http://localhost:8080/algoliaBundle.js`.

You will get the bundle along with the sourcemap, you can also:

```sh
cd instantsearch.js
npm link
cd ../algoliasearch-extensions-bundle
npm link instantsearch.js
```

So that you can hack the bundle from your file system and have it rebuilt when you
save files.

## build

```sh
npm run build
```

## bundle.min.js

The latest bundle.min.js is always in the npm package, not on github.

See prepublish task in [package.json](package.json).
