module.exports = {
  $: require('jquery'),
  Hogan: require('hogan.js'),
  algoliasearch: require('algoliasearch'),
  algoliasearchHelper: require('algoliasearch-helper')
};

require('jquery-ui/slider');
require('jquery-ui/sortable');
require('jquery-ui/draggable');
require('jquery-ui/mouse');

// Some jQuery plugins are not commonJS compatible and thus
// we cannot easily tell them to use our own jQuery instead of the global jQuery
// To solve this, we do a little trick.
var oldJQuery = window.jQuery;
window.jQuery = module.exports.$;
require('jquery-ui-touch-punch');
require('typeahead.js');
window.jQuery = oldJQuery;
