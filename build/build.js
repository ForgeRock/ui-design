#! /usr/bin/env node
const fs = require('fs');
const sass = require('node-sass');

const config = {
  dist: 'dist/',
  lib: 'lib/',
  scss: 'src/scss/',
};

const defaultImports = [
  'functions',
  'variables',
  'mixins/mixins',
  'rfs/rfs',
  'utilities/utilities',
];

const args = process.argv.slice(2, process.argv.length);
const regex = /^_(.*).scss$/;

const build = (args) => {
  const importFiles = getSassImports(args);
  const filename =
    args.length > 0 ? `${config.dist}${args.join('-')}.css` : `${config.lib}forgerock.css`;
  const result = sass.renderSync({
    data: importFiles,
    includePaths: [config.scss],
    outputStyle: 'compressed',
    outFile: filename,
    sourceMap: `${filename}.map`,
  });
  fs.writeFileSync(filename, result.css, (err) => {
    if (err) {
      console.error('CSS build error: ', err);
    }
  });
  fs.writeFileSync(`${filename}.map`, result.map, (err) => {
    if (err) {
      console.error('Source Map build error: ', err);
    }
  });
  console.info(`Built ${filename}`);
};

const getSassImports = (components) => {
  const list = components.length > 0 ? formatImports(components) : getAllFiles();
  const includes = formatImports(defaultImports);
  return includes.join('\n') + '\n' + list.join('\n');
};

const getAllFiles = () => {
  const files = fs.readdirSync(config.scss);
  const filtered = files.filter((item) => {
    const cleaned = item.match(regex);
    if (!cleaned) {
      return false;
    }
    return !defaultImports.includes(cleaned[1]);
  });
  const list = filtered.map((item) => {
    const cleaned = item.match(regex);
    return `@import '${cleaned[1]}';`;
  });
  return list;
};

const formatImports = (items) => {
  return items.map((item) => `@import '${item}';`);
};

build(args);
