var loaderUtils = require('loader-utils');
var Papa = require('papaparse');

module.exports = function(text) {
  this.cacheable();

  var config = loaderUtils.getLoaderConfig(this.query);
  var parsed = Papa.parse(text, {
    header: config.header,
    dynamicTyping: config.dynamicTyping,
    comments: config.comments,
    skipEmptyLines: true
  });

  return 'module.exports = ' + JSON.stringify(parsed.data);
};


