module.exports = {
  $: require('jquery'),
  // we ask for the non-builded version of instantsearch.js to avoid
  // duplication of algoliasearch, algoliasearchHelper and hogan modules
  // that's why we also need some webpack configuration and modules here
  instantsearch: require('instantsearch.js/dist-es5-module'),
  algoliasearch: require('algoliasearch'),
  algoliasearchHelper: require('algoliasearch-helper'),
  Hogan: require('hogan.js'),
  autocomplete: require('autocomplete.js/index_jquery.js')
};

require('jquery-ui/sortable');
