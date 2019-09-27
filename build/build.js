#! /usr/bin/env node
const fs = require('fs');
const sass = require('node-sass');

const args = process.argv.slice(2, process.argv.length);
const scssPath = 'src/scss/';
const regex = /^_(.*).scss$/;
const defaultImports = [
  'functions',
  'variables',
  'mixins/mixins',
  'rfs/rfs',
  'utilities/utilities',
];

const build = args => {
  const importFiles = getSassImports(args);
  const filename = args.length > 0 ? args.join('-') : 'forgerock';
  const result = sass.renderSync({
    data: importFiles,
    includePaths: [scssPath],
    outputStyle: 'compressed',
    outFile: `dist/${filename}.css`,
    sourceMap: `dist/${filename}.css.map`,
  });
  fs.writeFileSync(`dist/${filename}.css`, result.css, err => {
    if (err) {
      console.error('CSS build error: ', err);
    }
  });
  fs.writeFileSync(`dist/${filename}.css.map`, result.map, err => {
    if (err) {
      console.error('Source Map build error: ', err);
    }
  });
  console.info('CSS build complete');
};

const getSassImports = components => {
  const list =
    components.length > 0 ? formatImports(components) : getAllFiles();
  const includes = formatImports(defaultImports);
  return includes.join('\n') + '\n' + list.join('\n');
};

const getAllFiles = () => {
  const files = fs.readdirSync(scssPath);
  const filtered = files.filter(item => {
    const cleaned = item.match(regex);
    if (!cleaned) {
      return false;
    }
    return !defaultImports.includes(cleaned[1]);
  });
  const list = filtered.map(item => {
    const cleaned = item.match(regex);
    return `@import '${cleaned[1]}';`;
  });
  return list;
};

const formatImports = items => {
  return items.map(item => `@import '${item}';`);
};

build(args);
