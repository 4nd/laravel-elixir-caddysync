# laravel-elixir-caddysync
> laravel-elixir-caddysync plugin for [laravel-elixir](https://github.com/laravel/elixir), [caddy](https://github.com/mholt/caddy) and [gulp](https://github.com/wearefractal/gulp)

[![npm](https://img.shields.io/npm/v/laravel-elixir-caddysync.svg)](https://www.npmjs.com/package/laravel-elixir-caddysync)
[![npm](https://img.shields.io/npm/dm/laravel-elixir-caddysync.svg)](https://www.npmjs.com/package/laravel-elixir-caddysync)
[![GitHub issues](https://img.shields.io/github/issues/4nd/laravel-elixir-caddysync.svg)](https://github.com/4nd/laravel-elixir-caddysync/issues)
[![GitHub stars](https://img.shields.io/github/stars/4nd/laravel-elixir-caddysync.svg)](https://github.com/4nd/laravel-elixir-caddysync/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/4nd/laravel-elixir-caddysync.svg)](https://github.com/4nd/laravel-elixir-caddysync/network)
[![GitHub license](https://img.shields.io/github/license/4nd/laravel-elixir-caddysync.svg)](https://github.com/4nd/laravel-elixir-caddysync)

## What does it do?

This ingredient for Laravel Elixir will find a free port on which to run Caddy (a web server) and then uses the default browserSync Elixir plugin to let you work with it.  The upshot is that running `gulp watch` will fire open your browser with the website in it, with no need for a VM or manual server setup!

## Requirements
[Caddy](https://github.com/mholt/caddy) should be installed somewhere in your path, although the executables location can be defined using the `caddypath` option.

PHP-FPM/CGI should be running as a service/process already on your system, you'll need to know the socket/host:port and put this in your Caddyfile (replace the '127.0.0.1:9000' with your own configuration).

## Installation

Using NPM to install Laravel Elixir Caddysync and save your `packages.json`

**For laravel-elixir >=v5.x**
```
npm install --save-dev laravel-elixir-caddysync
```

Or you can manually update your `packages.json` to include Laravel Elixir Caddysync

```
{
  "devDependencies": {
    "gulp": "^3.8.8",
    "laravel-elixir": "^5.0",
    "laravel-elixir-caddysync": "^1.0"
  }
}
```

then `npm install`

Add it to your Elixir Gulpfile.js:

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-caddysync');

elixir(function(mix) {
   mix.caddySync();
});
```

There is an example Caddyfile [Caddyfile.example](https://github.com/4nd/laravel-elixir-caddysync/blob/master/Caddyfile.example) that can be copied in to the folder with your Gulpfile.js, or wherever you execute gulp, and renamed to just **Caddyfile**


## Usage

### laravel-elixir-caddysync(options)

#### options _(optional)_
Type: `object`

Default:
```
{
    caddypath: 'caddy',
    basePort: 50000,
    bindTo: '0.0.0.0',
}
```

## License

[The MIT License (MIT)](http://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2015 Joseph Richardson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

