var loaderUtils = require('loader-utils');
var Papa = require('papaparse');

module.exports = function(text) {
  this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  var parsed = Papa.parse(text, {
    header: query.header !== false,
    dynamicTyping: query.dynamicTyping !== false,
    comments: query.comments === true
  });

  return 'module.exports = ' + JSON.stringify(parsed.data);
};
