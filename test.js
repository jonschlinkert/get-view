'use strict';

require('mocha');
const assert = require('assert');
const getView = require('./');
let views;

describe('getView', function() {
  beforeEach(function() {
    views = {
      'foo': { path: 'foo', content: 'this is foo' },
      'bar.md': { path: 'bar.md', content: 'this is bar' },
      'a/b/c/baz.md': { path: 'a/b/c/baz.md', content: 'this is baz', base: 'a' },
      'test/fixtures/templates/a.tmpl': { path: 'test/fixtures/templates/a.tmpl' }
    };
  });

  it('should get a view by name', function() {
    const view = getView(views, 'foo');
    assert(view);
    assert.equal(view.path, 'foo');
  });

  it('should return undefined when a view is not found', function() {
    const view = getView(views, 'flflflflflf');
    assert(typeof view === 'undefined');
  });

  it('should get a view with the key modified by the given function', function() {
    const view = getView(views, function(view) {
      return view.path.toUpperCase() === 'FOO';
    });
    assert(view);
    assert.equal(view.path, 'foo');
  });

  it('should get a view by `view.path`', function() {
    const view = getView(views, 'a/b/c/baz.md');
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.basename`', function() {
    const view = getView(views, 'baz.md');
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.stem`', function() {
    const view = getView(views, 'baz');
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.relative`', function() {
    const view = getView(views, 'b/c/baz.md');
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });
});
