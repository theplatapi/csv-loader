# Webpack csv loader

## Installation

Install via npm:

```
npm install -S -E csv-loader
```

## Usage

You can require csv data like this:

``` javascript
var data = require('csv!./data.csv');
// => returns data.csv content as json parsed object
```

The loader will translate the ```data.csv``` file into a JSON Object.

#### Usage with webpack.config

To require csv files like this: ```require('data.csv')``` , you can add the csv-loader to your webpack config:

``` javascript
module : {
  loaders : [
    { test: /\.csv$/, loader: 'csv-loader' } //will load all .csv files with csv-loader by default
  ]
}
```

#### Options

**header**

Tells the loader to look for a CSV header or not. *Default: true*

``` javascript
var data = require('csv?-header!./data.csv'); //No header
```

**dynamicTyping**

Tells the loader to automatically convert data types *Default: true*

``` javascript
var data = require('csv?-dynamicTyping!./data.csv'); //Disable dynamic typing
```

**comments**

``` javascript
var data = require('csv?+dynamicTyping!./data.csv'); //Enable comments
```

Allows comments in the CSV file *Default: false*

## Credits

* Inspired by [dsv-loader](https://github.com/wbkd/dsv-loader)
* CSV parsing done with [Papa Parse](http://papaparse.com/)
