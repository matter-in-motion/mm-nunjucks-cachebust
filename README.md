# Matter In Motion. Nunjucks cache busting tag extension

Nunjucks cache busting tag extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

## Usage

[Extensions installation intructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)


## Tags
### cachebuster
Looks for file matching pattern `filename*.ext` and returns full url to this file. If no matches found returns url to file.

`{% cachebuster filepath, baseurl %}`

### Exmaple:
`{% cahebuster 'static/app.js', '/static' %}`

License: MIT.
