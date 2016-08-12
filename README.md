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
module : {
  loaders : [
    { test: /\.csv$/, loader: 'csv-loader' } // loads all .csv files with csv-loader by default
  ]
}
```

The loader will translate csv files into JSON.

## Options

Any options supported by Papa Parse can be passed to this loader. The full API is available
[here](http://papaparse.com/docs#config). This module sets the following defaults differently from PapaParse:

``` javascript
   {
      header: true,           // Convert CSV to an array of objects, with header as keys
      skipEmptyLines: true,   // Ignore empty lines in the CSV file.
   }
```


Any setting can be toggled by editing the csv-loader configuration. Options are directly passed to PapaParse.

**Example: Disabling automatic data type conversion**

``` javascript
{ test: /\.csv$/, loader: 'csv-loader?dynamicTyping=false' }
```

## Not just a CSV loader
This module technically works with any column based file separated by deliminators. Just change the test extension and
the loader will automatically figure out which deliminator to use.

## Credits

* Inspired by [dsv-loader](https://github.com/wbkd/dsv-loader)
* CSV parsing done with [Papa Parse](http://papaparse.com/)
