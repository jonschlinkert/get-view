'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var Templates = require('templates');
var getView = require('./');
var app;

describe('getView', function() {
  beforeEach(function() {
    app = new Templates();
    app.create('page');

    app.page('foo', { content: 'this is foo' });
    app.page('bar.md', { content: 'this is bar' });
    app.page('a/b/c/baz.md', { content: 'this is baz', base: 'a' });
    app.page('test/fixtures/templates/a.tmpl');
  });

  it('should get a view by name', function() {
    var view = getView('foo', app.views.pages);
    assert(view);
    assert.equal(view.key, 'foo');
  });

  it('should return undefined when a view is not found', function() {
    var view = getView('flflflflflf', app.views.pages);
    assert(typeof view === 'undefined');
  });

  it('should get a view with the key modified by the given function', function() {
    var view = getView('foo.md', app.views.pages, function(key) {
      return path.basename(key, path.extname(key));
    });
    assert(view);
    assert.equal(view.key, 'foo');
  });

  it('should get a view by `view.path`', function() {
    var view = getView('a/b/c/baz.md', app.views.pages);
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.basename`', function() {
    var view = getView('baz.md', app.views.pages);
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.filename`', function() {
    var view = getView('baz', app.views.pages);
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });

  it('should get a view by `view.relative`', function() {
    var view = getView('b/c/baz.md', app.views.pages);
    assert(view);
    assert.equal(view.path, 'a/b/c/baz.md');
  });
});
