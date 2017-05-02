var webpack = require("webpack");
var assert = require("chai").assert;
var MemoryFS = require("memory-fs");
var path = require("path");

var DEFAULT_CONFIG = {
  entry: "./test/fixtures/before.csv",
  output: {
    path: path.join(__dirname, "output") + path.sep,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: './index',
        exclude: /node_modules/,
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  }
};


describe("csv-loader", function () {
  it("parses csv with the recommended configuration", function (done) {
    var compiler = webpack(DEFAULT_CONFIG,
      function (err, stats) {
        assert.isNull(err);
        assert.equal(stats.hasErrors(), false);
        assert.equal(stats.hasWarnings(), false);
        assert.deepEqual(eval(stats.compilation.assets["bundle.js"].source()), require("./fixtures/after.json"));
        done();
      });

    compiler.outputFileSystem = new MemoryFS();
  });
});