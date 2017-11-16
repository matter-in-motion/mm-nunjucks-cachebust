'use strict';

module.exports = units => {
  const settings = units.require('core.settings').require('nunjucksExtensions');
  const app = units.require('core.app');
  const env = units.require('templates.nunjucks');

  settings.forEach(ext => {
    if (typeof ext === 'string') {
      ext = app.require(ext);
    }

    const extension = new ext();
    const name = extension.tags[0];
    env.addExtension(name, extension);
  });
}
