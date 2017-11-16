'use strict';
const Fuzzyfile = require('./tags/fuzzyfile');

module.exports = units => {
  const env = units.require('templates.nunjucks');
  env.addExtension('fuzzyfile', new Fuzzyfile());
}
