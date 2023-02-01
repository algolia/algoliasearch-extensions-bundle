module.exports = {
  $: require('jquery'),
  // we ask for the non-builded version of instantsearch.js to avoid
  // duplication of algoliasearch, algoliasearchHelper and hogan modules
  // that's why we also need some webpack configuration and modules here
  instantsearch: require('instantsearch.js/dist/instantsearch.production.min.js'),
  algoliasearch: require('algoliasearch'),
  algoliasearchHelper: require('algoliasearch-helper'),
  Hogan: require('hogan.js'),
  autocomplete: require('@algolia/autocomplete-js').autocomplete,
  getAlgoliaResults: require('@algolia/autocomplete-js').getAlgoliaResults,
  createQuerySuggestionsPlugin: require('@algolia/autocomplete-plugin-query-suggestions'),
  createLocalStorageRecentSearchesPlugin: require('@algolia/autocomplete-plugin-recent-searches'),
  createAlgoliaInsightsPlugin: require('@algolia/autocomplete-plugin-algolia-insights')
};
