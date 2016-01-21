# get-view [![NPM version](https://img.shields.io/npm/v/get-view.svg)](https://www.npmjs.com/package/get-view) [![Build Status](https://img.shields.io/travis/jonschlinkert/get-view.svg)](https://travis-ci.org/jonschlinkert/get-view)

> Utility for getting an assemble view from a collection object.

- [Install](#install)
- [Usage](#usage)
- [Related projects](#related-projects)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i get-view --save
```

## Usage

Should work with any collection of vinyl files.

```js
var getView = require('get-view');
```

**[templates](https://github.com/jonschlinkert/templates) example**

Given the following setup code, all of the below examples would return a `page` from the `app.views.pages` collection:

```js
var templates = require('templates');
app = templates();
app.create('page');

app.page('foo', {content: 'this is foo'});
app.page('bar.md', {content: 'this is bar'});
app.page('a/b/c/baz.md', {content: 'this is baz', base: 'a'});
app.page('test/fixtures/templates/a.tmpl');
```

Get a view by customizing the lookup key with a function:

```js
var view = getView('foo.md', app.views.pages, function(key) {
  return path.basename(key, path.extname(key));
});

//=> <Page "foo" <Buffer 74 68 69 73 20 69>>
```

Get a view by `view.path`

```js
var view = getView('a/b/c/baz.md', app.views.pages);
//=> <Page "b/c/baz.md" <Buffer 74 68 69 73>>
```

Get a view by `view.basename`

```js
var view = getView('baz.md', app.views.pages);
//=> <Page "b/c/baz.md" <Buffer 74 68 69 73>>
```

Get a view by `view.filename`

```js
var view = getView('baz', app.views.pages);
//=> <Page "b/c/baz.md" <Buffer 74 68 69 73>>
```

Get a view by `view.relative`

```js
var view = getView('b/c/baz.md', app.views.pages);
//=> <Page "b/c/baz.md" <Buffer 74 68 69 73>>
```

## Related projects

* [assemble](https://www.npmjs.com/package/assemble): Assemble is a powerful, extendable and easy to use static site generator for node.js. Used… [more](https://www.npmjs.com/package/assemble) | [homepage](https://github.com/assemble/assemble)
* [gulp](https://www.npmjs.com/package/gulp): The streaming build system | [homepage](http://gulpjs.com)
* [match-file](https://www.npmjs.com/package/match-file): Returns true when the given `name` matches any of the path properties on a vinyl… [more](https://www.npmjs.com/package/match-file) | [homepage](https://github.com/jonschlinkert/match-file)
* [templates](https://www.npmjs.com/package/templates): System for creating and managing template collections, and rendering templates with any node.js template engine.… [more](https://www.npmjs.com/package/templates) | [homepage](https://github.com/jonschlinkert/templates)
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://www.npmjs.com/package/verb) | [homepage](https://github.com/verbose/verb)
* [vinyl](https://www.npmjs.com/package/vinyl): A virtual file format | [homepage](http://github.com/gulpjs/vinyl)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/get-view/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on January 21, 2016._