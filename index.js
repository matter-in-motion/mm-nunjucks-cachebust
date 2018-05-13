'use strict';

module.exports = function() {
  const settings = this.units.require('core.settings').require('nunjucks').extensions;
  if (!Array.isArray(settings)) {
    this.logger.warn({
      extension: 'nunjucks-extensions'
    }, 'No extensions defined in nunjucks settings')
    return
  }

  const env = this.units.require('templates.nunjucks');

  settings.forEach(ext => {
    if (typeof ext === 'string') {
      ext = this.require(ext);
    }

    const extension = new ext();
    const name = extension.tags[0];
    env.addExtension(name, extension);
  });
}
