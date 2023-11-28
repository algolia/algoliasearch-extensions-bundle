# algoliasearch-extensions-bundle

Bundle [jQuery](http://jquery.com/), [autocomplete.js](https://github.com/algolia/autocomplete.js) & [instantsearch.js](https://github.com/algolia/instantsearch.js) to propulse Algolia-powered extensions & plugins.

Mostly for internal Algolia usage, publicly available for transparency and ease of deployment.

### The Extension JS Bundle

Knowing the version of the library will help you understand what is available in these libraries for you to leverage in terms of customisation. This table will help you determine which documentation to reference when you start working on your customisation.

| Extension Version | 	autocomplete.js                                                  | instantsearch.js | search-insights.js | recommend.js |
|-------------------|-------------------------------------------------------------------| --- | --- | --- |
| v3.11.0-beta            | [1.6.3](https://github.com/algolia/autocomplete.js/tree/v1.6.3)   | [4.41.0](https://github.com/algolia/instantsearch.js/tree/v4.41.0) | [2.6.0](https://github.com/algolia/search-insights.js/tree/v2.6.0) | [1.8.0](https://github.com/algolia/recommend/tree/v1.8.0) |
## install deps

```sh
yarn
```

## Debugging live bundle versions

At any moment on a website using this bundle, you can check the exact version of dependencies by looking inside `window.algoliaBundle`.

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

## algoliaBundle.min.js

The latest algoliaBundle.min.js is available in node_modules/algoliasearch-extensions-bundle/dist/algoliaBundle.min.js after installing with npm.
