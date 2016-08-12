var loaderUtils = require('loader-utils');
var Papa = require('papaparse');

module.exports = function(text) {
  this.cacheable();
  this.options = {
    default: {
      header: true,
      dynamicTyping: true,
      comments: false,
      skipEmptyLines: true
    }
  };

  var config = loaderUtils.getLoaderConfig(this, "default");
  var parsed = Papa.parse(text, config);

  return 'module.exports = ' + JSON.stringify(parsed.data);
};


