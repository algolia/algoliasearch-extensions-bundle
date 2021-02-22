# algoliasearch-extensions-bundle

Bundle [jQuery](http://jquery.com/), [autocomplete.js](https://github.com/algolia/autocomplete.js) & [instantsearch.js](https://github.com/algolia/instantsearch.js) to propulse Algolia-powered extensions & plugins.

Mostly for internal Algolia usage, publicly available for transparency and ease of deployment.

## Build Branches

* `master` - Magento 1 (front, back)
* `ISv2` - Magento 2 v1.x (front, back)
* `ISv4` - Magento 2 v2.x/3.x (front)
* `adminBundle` - Magento 2 v2.x/3.x (back)

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
