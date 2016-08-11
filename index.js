var loaderUtils = require('loader-utils');
var Papa = require('papaparse');

module.exports = function(text) {
  this.cacheable();
  this.default = {
    header: true,
    dynamicTyping: true,
    comments: false
  };

  var config = loaderUtils.getLoaderConfig(this, "default");
  var parsed = Papa.parse(text, {
    header: config.header,
    dynamicTyping: config.dynamicTyping,
    comments: config.comments,
    skipEmptyLines: true
  });

  return 'module.exports = ' + JSON.stringify(parsed.data);
};


