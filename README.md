# Webpack csv loader

[![NPM](https://nodei.co/npm/csv-loader.png)](https://nodei.co/npm/csv-loader/)

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
    { test: /\.csv$/, loader: 'csv-loader' } //will load all .csv files with csv-loader by default
  ]
}
```

The loader will translate csv files into JSON.

## Options

**header**

Tells the loader to look for a CSV header or not. *Default: true*

``` javascript
{ test: /\.csv$/, loader: 'csv-loader?header=false' }
```

**dynamicTyping**

Tells the loader to automatically convert data types *Default: true*

``` javascript
{ test: /\.csv$/, loader: 'csv-loader?dynamicTyping=false' }
```

**comments**

Allows comments in the CSV file *Default: false*

``` javascript
{ test: /\.csv$/, loader: 'csv-loader?comments=true' }
```

## Credits

* Inspired by [dsv-loader](https://github.com/wbkd/dsv-loader)
* CSV parsing done with [Papa Parse](http://papaparse.com/)
