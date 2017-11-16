# Matter In Motion. Nunjucks fuzzy file search tag extension

Nunjucks fuzzy file search tag extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

## Usage

[Extensions installation intructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)


## Tags
### fuzzyfile
Looks for file matching pattern `filename*.ext` and returns full url to this file. If no matches found returns url to file.

`{% fuzzyfile filepath %}`

### Exmaple:
`{% fuzzyfile 'static/app.js' %}`

License: MIT.
