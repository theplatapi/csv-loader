# Webpack csv loader

[![NPM](https://nodei.co/npm/csv-loader.png)](https://nodei.co/npm/csv-loader/)

## Purpose
This CSV loader automatically converts data types, making it easy to import and start using data.

## Installation

Install via npm:

```
npm install -S csv-loader
```

## Usage

Add csv-loader to your webpack config:

``` javascript
const config = {
  loaders : [
    { test: /\.csv$/, loader: 'csv-loader' }
  ]
}
```

This loads all .csv files with csv-loader by default. The loader will translate csv files into JSON.

## Configuration

Any options supported by Papa Parse can be passed to this loader. The current API is available
[here](http://papaparse.com/docs#config).

Add csv key to your webpack.config.js. Below is the recommended configuration, which changes Papa Parse defaults:

``` javascript
const config = {
  loaders : [
    { test: /\.csv$/, loader: 'csv-loader' }
  ],
  csv: {
     dynamicTyping: true,
     header: true,
     skipEmptyLines: true
  }
}
```

This will automatically convert columns to the proper data type, parse the CSV header, and skip any blank lines in the file.

## Not just a CSV loader
This module works with any column based file separated by deliminators. Simply set which extension to parse and the
loader will automatically figure out which deliminator to use.

## Credits

* Inspired by [dsv-loader](https://github.com/wbkd/dsv-loader)
* CSV parsing done with [Papa Parse](http://papaparse.com/)
