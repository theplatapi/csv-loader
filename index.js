var Papa = require('papaparse');
var loaderUtils = require('loader-utils');


module.exports = function (text) {
  var config = loaderUtils.getLoaderConfig(this, "csv");
  var parsed = Papa.parse(text, config);

  if (this.cacheable) {
    this.cacheable();
  }

  return 'module.exports = ' + JSON.stringify(parsed.data);
};
