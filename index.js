'use strict';
const CacheBust = require('./tags/cachebust');

module.exports = units => {
  const env = units.require('templates.nunjucks');
  env.addExtension('cachebust', new CacheBust());
}
